import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useMe } from "~/graphql/auth/useMe";
import { Button } from "./Button";
import { useLogout } from "~/graphql/auth/useLogout";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const { data, loading } = useMe();
  const me = data?.me;
  console.log(me);
  const logout = useLogout();
  const [count, setCount] = useState(0);

  return (
    <header className="bg-primary h-16 flex items-center py-3 px-5 text-white">
      <div className="flex items-center w-full justify-between">
        <Link href="/">
          <h2 className="text-2xl font-bold tracking-widest">Stash</h2>
        </Link>
        <button onClick={() => setCount((c) => c + 1)}>count: {count}</button>
        <nav className="flex items-center gap-2">
          {me ? (
            <>
              <Link href="/stores">Stores</Link>
              <Image
                className="w-8 h-8 rounded-full bg-white"
                height={32}
                width={32}
                alt="profile image"
                src={me.profileImage}
              />
              <Button onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Link href="/sign-up">Sign up</Link>
              <Link href="/login">Sign in</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
