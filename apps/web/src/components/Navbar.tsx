import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMe } from "~/graphql/auth/useMe";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const { data, loading } = useMe();
  const me = data?.me;
  console.log(me);

  return (
    <header className="bg-primary py-3 px-5 text-white">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-widest">Stash</h2>
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
            </>
          ) : (
            <>
              <Link href="/sign-up">Sign up</Link>
              <Link href="/sign-in">Sign in</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
