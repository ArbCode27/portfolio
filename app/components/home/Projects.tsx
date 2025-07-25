import React from "react";
import amijai from "~/assets/amijai.webp";
import lego from "~/assets/legomarketing.webp";
import nelmar from "~/assets/nelmar.webp";
import basciano from "~/assets/basciano.webp";
import Carousel from "../ui/carousel";

const images: { title: string; img: string; link: string }[] = [
  {
    title: "Amijai",
    img: amijai,
    link: "https://amijai.com/",
  },
  {
    title: "Basciano",
    img: basciano,
    link: "https://www.basciano.io/",
  },
  {
    title: "nelmar",
    img: nelmar,
    link: "https://nelmarglobals.com/",
  },
  {
    title: "Lego MKT",
    img: lego,
    link: "https://new.legomarketing.com/",
  },
];

export const Projects = () => {
  return (
    <section className="container mx-auto mt-12 max-w-[1200px] bg-black px-8 py-14 rounded-2xl">
      <div className="container mx-auto mb-12 text-center border-b border-white w-fit">
        <p className="text-white tracking-[2px] font-[200]">Casos de Éxito</p>
        <h2 className="md:text-3xl text-2xl font-[800] tracking-[2px] uppercase text-white">
          Mi Huella Digital
        </h2>
      </div>
      <div>
        <Carousel direction="horizontal" show={[1, 1, 2, 3]} images={images} />
      </div>
    </section>
  );
};
