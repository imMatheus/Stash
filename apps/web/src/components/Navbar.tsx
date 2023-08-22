import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMe } from "~/graphql/auth/useMe";
import { Button } from "./Button";
import { useLogout } from "~/graphql/auth/useLogout";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const { data, loading } = useMe();
  const me = data?.me;
  console.log(me);
  const logout = useLogout();

  return (
    <header className="bg-primary py-3 px-5 text-white">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h2 className="text-2xl font-bold tracking-widest">Stash</h2>
        </Link>
        <nav className="flex items-center gap-2">
          {me ? (
            <>
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
