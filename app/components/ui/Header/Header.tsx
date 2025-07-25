import React from "react";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="container mx-auto max-w-[1200px] px-2 flex justify-between py-6">
      <figure className="flex items-center gap-1">
        <p className="font-[900] text-xl">{"</>"}</p>
        <p className="font-[900] text-xl">Abraham Developer.</p>
      </figure>

      <Navbar />
    </header>
  );
};
