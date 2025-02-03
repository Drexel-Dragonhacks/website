import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to DragonHacks
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the joy of <br /> creativity and innov<b>a</b>tion"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          
          <p className="text-gray-500">
            DragonHacks is Drexel University's 24-hour hackathon that challenges participants to push their limits, collaborate with like-minded individuals, and showcase their creativity, innovation, and problem-solving skills in a fun and fast-paced environment.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
