import React from "react";
import Header from "./header/Header";
import About from "./about/About";
import Livestock from "./livestock/Livestock";
import Info from "./Info/Info";
import Machines from "./machines/Machines";
import Info2 from "./Info2/Info2";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import { Navbar } from "../components";

const Container = () => {
  return (
    <div>
      <div className="App_header">
        <Navbar />
        <Header />
      </div>
      <About />
      <Livestock />
      <Info />
      <Machines />
      <Info2 />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Container;
