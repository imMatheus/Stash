import React from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <header className="bg-black py-3 px-5">
      <div className="flex items-center justify-between text-white">
        <h2 className="text-3xl font-black tracking-widest text-primary-200">
          Stash
        </h2>
        <nav className="">asdad</nav>
      </div>
    </header>
  );
};
