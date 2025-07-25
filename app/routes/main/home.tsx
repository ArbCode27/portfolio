import { PresentationCards } from "~/components/home/PresentationCards";
import type { Route } from "./+types/home";
import { AboutMe } from "~/components/home/AboutMe";
import { Projects } from "~/components/home/Projects";
import { Experience } from "~/components/home/Experience";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Abraham Dev." },
    { name: "description", content: "My personal portfolio!" },
  ];
}

export default function Home() {
  return (
    <>
      <section className="text-center md:mt-8 p-4">
        <h2 className="text-6xl lg:text-8xl font-extrabold lg:leading-tight tracking-tight mb-2 ">
          Frontend Developer
        </h2>
        <p className="md:max-w-[680px] container mx-auto font-[400] md:tracking-[.25em] text-[12px] uppercase mt-1">
          Interfaces modernas, código limpio y rendimiento optimizado para
          productos digitales.
        </p>
      </section>
      <PresentationCards />
      <AboutMe />
      <Projects />
      <Experience />
    </>
  );
}
