import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import esfera from "~/assets/esfera.webp";

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

          <Button
            variant="link"
            className="flex justify-between cursor-pointer text-white text-lg p-0 mt-6 hover:underline gap-1 w-full"
          >
            ABOUT US
            <div className="p-1 bg-white rounded-full">
              <ArrowUpRight className="text-black w-4 h-4" />
            </div>
          </Button>
        </CardContent>
      </Card>
      <figure className="md:col-span-4 md:order-2 rounded-2xl max-h-[480px] rounded-2xl overflow-hidden bg-black">
        <img
          className="container mx-auto h-full w-[75%] object-cover"
          src={esfera}
          alt="abraham rojas"
        />
      </figure>
    </section>
  );
};
