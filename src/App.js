import React from "react";
import "./App.css";
import {
  Blog,
  Contact,
  Info,
  Footer,
  Header,
  Livestock,
  Machines,
  About,
  Info2,
} from "./containers";
import { Navbar } from "./components";
const App = () => {
  return (
    <div className="App-all">
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

export default App;
