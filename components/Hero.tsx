import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Typed from "typed.js";
import { useEffect } from "react";
import LazyImage from './LazyImage';
const Hero = () => {
  useEffect(() => {
    const typed = new Typed("#element", {
      strings: [
        "Frontend Developer",
        "Web Developer.",
        "React Developer.",
        "Next Developer.",
        "Computer engineer.",
      ],
      smartBackspace: true,
      loop: true,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 500,
    });

    // Clean up to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div id="about" className="pt-[130px] pb-16 ">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <LazyImage
            src="/mineImage.png"
            alt="Abdurrahman Al-Azhari"
            className="m-2 md:m-4 w-[150px] h-[150px
            rounded-full border-4 border-white/30 shadow-lg object-cover transition-transform hover:scale-110 relative z-50 "
          />
        </div>
        <p className="text-center  relative md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Hi! I&apos;m Abdurrahman Al-Azhari,a professional
          <br />
          <span
            id="element"
            className=" max-h-[200px] mb-[145px] md:mb-0 md:max-h-none"
          ></span>
        </p>
      </div>

      <div className="flex justify-center relative my-20 mt-4 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with React.js
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Building modern, responsive, and interactive user interfaces."
            className="text-center text-[40px] md:text-4xl lg:text-5xl"
          />

          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
