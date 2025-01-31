

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";


import Router from "./router/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);


const App = () => {
  

  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
   
  );
};

export default App;
