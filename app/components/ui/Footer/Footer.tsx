import { Gitlab, Linkedin } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full flex justify-between p-6 bg-[#222222] text-white mt-20 items-center">
      <h4 className="text-4xl font-bold">Conectemos!</h4>

      <div className="flex gap-3 text-white">
        <a href="https://www.linkedin.com/in/abraham-rojas-4a31b1298/">
          <Linkedin />
        </a>

        <a href="https://gitlab.com/ArbCode27">
          <Gitlab />
        </a>
      </div>
    </footer>
  );
};
