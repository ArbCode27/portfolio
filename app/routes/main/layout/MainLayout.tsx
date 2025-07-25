import React from "react";
import { Outlet } from "react-router";
import { Footer } from "~/components/ui/Footer/Footer";
import { Header } from "~/components/ui/Header/Header";

const MainLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
