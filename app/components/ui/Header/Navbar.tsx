import { Smartphone } from "lucide-react";
import React from "react";

const routes: { path: string; name: string }[] = [
  {
    name: "Contáctame",
    path: "https://wa.link/n43erk",
  },
];
export const Navbar = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-2">
        {routes.map((item) => (
          <li
            key={item.name}
            className="flex gap-2 items-center border border-gray-700 p-1 rounded-full px-4 text-center"
          >
            <a href={item.path}>{item.name}</a>
            <Smartphone size={16} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
