import React, { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { Eye, EyeOff } from "react-feather";
import { useSignUp } from "~/graphql/auth/useSignUp";
import { Alert, AlertDescription, AlertTitle } from "~/components/Alert";
import { Button } from "~/components/Button";

const SignUp: NextPage = () => {
  const [inputStates, setInputStates] = useState({
    email: {
      value: "",
    },
    password: {
      value: "",
      showPassword: false,
    },
  });
  const [signUpMutation, { loading, error }] = useSignUp();

  async function handleSignUp() {
    console.log("doing sin up");

    try {
      const res = await signUpMutation({
        variables: {
          params: {
            email: inputStates.email.value,
            password: inputStates.password.value,
          },
        },
      });

      if (res.data) {
        localStorage.setItem("auth-token", res.data.signup.access_token);
      }

      console.log("got ressssss");

      console.log(res);
    } catch (error) {
      console.log("shit hit the fan ");
    }
  }

  console.log({ error, loading });

  const EyeIcon = inputStates.password.showPassword ? Eye : EyeOff;

  return (
    <div className="px-10 py-14">
      <div>
        <h1 className="text-center font-black text-3xl">Sign up</h1>
        <div className="max-w-sm mt-10 mx-auto">
          <div className="mb-5">
            <label htmlFor="sign-up-email-input" className="text-gray-500">
              Email
            </label>
            <div className="flex items-center rounded-md mt-1 py-1.5 px-2.5 border focus-within:border-primary">
              <input
                id="sign-up-email-input"
                type="email"
                placeholder="email@xyz.com"
                className="w-full outline-none"
                value={inputStates.email.value}
                onChange={(event) => {
                  setInputStates((c) => {
                    c.email.value = event.target.value;
                    return { ...c };
                  });
                }}
              />
            </div>
          </div>

          <label className="mb-3" htmlFor="sign-up-password-input">
            <h3 className="text-gray-500">Password</h3>
            <div className="flex items-center rounded-md mt-1 py-1.5 px-2.5 border focus-within:border-primary">
              <input
                id="sign-up-password-input"
                type={inputStates.password.showPassword ? "text" : "password"}
                placeholder="password"
                className="w-full mr-1 outline-none"
                value={inputStates.password.value}
                onChange={(event) => {
                  setInputStates((c) => {
                    c.password.value = event.target.value;
                    return { ...c };
                  });
                }}
              />
              <EyeIcon
                className="w-5 h-5 text-gray-400 cursor-pointer"
                onClick={() => {
                  const toggledState = !inputStates.password.showPassword;
                  setInputStates((c) => {
                    console.log(inputStates);
                    console.log(toggledState);

                    c.password.showPassword = toggledState;
                    return { ...c };
                  });
                }}
              />
            </div>
          </label>

          <div className="mt-4 flex justify-end">
            <Button variant="default" onClick={handleSignUp}>
              {loading ? "Loading.." : "Sign up"}
            </Button>
          </div>
          {error && (
            <Alert variant="error" className="mt-4">
              <AlertTitle>Could not sign up!</AlertTitle>
              <AlertDescription>{error.message}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
