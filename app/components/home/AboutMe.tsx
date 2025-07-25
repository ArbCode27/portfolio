import React from "react";

export const AboutMe = () => {
  return (
    <section className="md:grid p-4 grid-cols-6 container mx-auto mt-12 max-w-[1200px] pb-12 border-b border-black">
      <h2 className="font-[800] uppercase md:text-4xl text-3xl col-span-2 mb-2">
        Acerca de mi:
      </h2>
      <p className="md:text-xl font-[300] col-span-4">
        Soy Abraham Rojas, desarrollador frontend con experiencia en la creación
        de interfaces web modernas, responsivas y centradas en la experiencia
        del usuario. Me especializo en React y WordPress, tecnologías con las
        que he desarrollado sitios y aplicaciones para empresas de sectores como
        fintech, construcción y servicios tecnológicos. Mi enfoque se basa en
        escribir código limpio, aplicar buenas prácticas de desarrollo y
        construir soluciones escalables. He trabajado con clientes de distintas
        partes del mundo, como Estados Unidos, Polonia, Panamá y Venezuela,
        adaptando proyectos a necesidades multilingües, móviles y de alto
        rendimiento. Siempre busco mejorar la arquitectura de las aplicaciones,
        optimizar el rendimiento web y cuidar cada detalle de la interfaz.
        Además, tengo buen manejo de herramientas como Figma, Git, REST APIs y
        cPanel.
      </p>
    </section>
  );
};
