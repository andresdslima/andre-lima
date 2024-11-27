import { FaLaptopCode } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import myPhoto from "../public/me.png";
import Link from "next/link";
import "./Hero.scss"

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="home">
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

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           */}
          {/* <a href="/andre-lima/" className="text-generate-effect"> */}
          <a href="/" className="text-generate-effect">
            <TextGenerateEffect
              words="Transforming Concepts into Seamless User Experiences"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
          </a>

          <div className="image-container">
            <Link
              href="https://bit.ly/andrelimadev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={myPhoto.src}
                alt="Andre Lima"
                width={100}
                height={100}
              />
              {/* <Image src={myPhoto} alt="Andre Lima" width={100} height={100} /> */}
            </Link>
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! I&apos;m Andre Lima, a Fullstack Developer based in Portugal.
            </p>
          </div>

          <Link href="#about">
            <MagicButton
              title="See my work"
              icon={<FaLaptopCode />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
