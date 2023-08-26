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
    <header className="flex h-16 items-center bg-primary px-5 py-3 text-white">
      <div className="flex w-full items-center justify-between">
        <Link href="/">
          <h2 className="text-2xl font-bold tracking-widest">Stash</h2>
        </Link>
        <nav className="flex items-center gap-2">
          {me ? (
            <>
              <Link href="/stores">Stores</Link>
              <Image
                className="h-8 w-8 rounded-full bg-white"
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
