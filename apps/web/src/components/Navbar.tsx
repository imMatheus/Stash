import Link from "next/link";
import React from "react";
import { useMe } from "~/graphql/auth/useMe";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const data = useMe();

  console.log(data);

  return (
    <header className="bg-primary py-3 px-5 text-white">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-widest">Stash</h2>
        <nav className="flex items-center gap-2">
          <Link href="/sign-up">Sign up</Link>
          <Link href="/sign-in">Sign in</Link>
        </nav>
      </div>
    </header>
  );
};
