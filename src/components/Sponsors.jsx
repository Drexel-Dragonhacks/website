import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import pizza from '../../public/img/pizza.png';


const Sponsors = () => (
  <section className="bg-black">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 pt-10 pb-32 content-center">
        <p className="bento-title special-font text-white text-center pb-10">
          SPONSORS
        </p>
        <div className="flex items-center justify-center mx-auto ove flex-wrap space-y-10">
          <img src="/public/img/mlh-logo-color.png" className="mx-auto md:w-1/3"/>
          <img src="/public/img/ballinger.png" className="mx-auto md:w-1/3 bg-white"/>
          <img src="/public/img/autodesk.png" className="mx-auto md:w-1/2 bg-white"/>
          <img src={pizza} className="mx-auto md:w-1/2"/>
          <img src="/public/img/pennoni.png" className="mx-auto md:w-1/2"/>
          <img src="/public/img/ieee.png" className="mx-auto bg-white md:w-1/2"/>
        </div>
      </div>


        
      
    </div>
  </section>
);

export default Sponsors;
