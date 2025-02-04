import React from "react";
import { dataHome } from "../Constant/data";

export default function Home() {
  return (
    <div className="bg-neutralSilver -mt-7" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen mt-7">
        {dataHome.map((item, id) => (
          <div
            key={id}
            className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-3 md:gap-12"
          >
            <div className="w-full md:w-1/2">
              <img
                src={item.img}
                alt={item.alt}
                className="rounded-xl hover:scale-105 transition-all duration-300"
              />
            </div>

            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                {item.titre1}{" "}
                <span className="text-brandPrimary">{item.titre2}</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">{item.desc}</p>
              <button className="btn-primary">{item.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
