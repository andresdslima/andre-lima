"use client";

import React from "react";
import { companies, testimonials } from "../data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, link, name, img }) => (
            <a href={link} key={id} target="_blank" rel="noopener noreferrer">
              <div className="flex md:max-w-60 max-w-32 gap-2 justify-center items-center hover:scale-110 transition-all duration-300 hover:border-b-purple border-transparent border-2 pb-2">
                <img src={img} alt={name} className="md:w-10 w-5" />
                <span className="text-white text-bold md:w-24 w-20">
                  {name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;