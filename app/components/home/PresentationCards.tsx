import { Card, CardContent } from "../ui/card";
import { ArrowUpRight } from "lucide-react";
import amijai from "~/assets/amijai.webp";
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
];

export const PresentationCards = () => {
  return (
    <section className="container mx-auto md:mt-12 max-w-[1200px] grid md:grid-cols-6 gap-4 pb-12 border-b border-black p-4">
      <Card className="md:col-span-2 md:h-[480px] bg-black text-white rounded-2xl p-6 w-full flex flex-col justify-between mb-3 order-2 md:order-1">
        <CardContent className="p-0 flex flex-col justify-between h-full">
          <p className="text-base text-lg font-[200] leading-relaxed md:w-[80%]">
            Abraham Rojas soy un desarrollador frontend especializado en React y
            WordPress, enfocado en crear sitios web escalables y de alto
            rendimiento para empresas fintech y tecnológicas de América Latina y
            Europa.
          </p>

          <a
            href="https://wa.link/n43erk"
            className="flex justify-between cursor-pointer text-white text-lg p-0 mt-6 hover:underline gap-1 w-full"
          >
            Conectemos
            <div className="p-1 bg-white rounded-full">
              <ArrowUpRight className="text-black w-4 h-4" />
            </div>
          </a>
        </CardContent>
      </Card>
      <figure className="flex items-center p-4 md:px-8 md:col-span-4 md:order-2 rounded-2xl max-h-[480px] rounded-2xl overflow-hidden bg-black">
        <Carousel
          direction={"horizontal"}
          show={[1, 1, 1, 1]}
          images={images}
        />
      </figure>
    </section>
  );
};
