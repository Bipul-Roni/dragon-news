import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/Homelayout/LeftAside";
import RightAside from "../components/Homelayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews> 
        </section>
      </header>
      <nav className="w-11/12 mx-auto my-3">
        <Navbar></Navbar>
      </nav>

      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-2 h-fit">
          <LeftAside></LeftAside>
        </aside>
        
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>

        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
