import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { ComputersCanvas, EarthCanvas,EarthCanvasTwo } from "./canvas";

const Tech = () => {
  return (
    // <div className='flex flex-row flex-wrap justify-center gap-10'>
    //   {technologies.map((technology) => (
    //     <div className='w-28 h-28' key={technology.name}>
    //       <BallCanvas icon={technology.icon} />
    //     </div>
    //   ))}
    // </div>
    <section className={`relative w-full h-screen mx-auto`}>

    {/* <BoatCanvas /> */}
    <EarthCanvasTwo/>

  </section>
  );
};

export default SectionWrapper(Tech, "");
