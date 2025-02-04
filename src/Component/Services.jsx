import React from "react";
import { services, clients } from "../Constant/data";

export default function Services() {
  return (
    <div className="md:px-14 px-4 py-7 max-w-screen-2xl mx-auto" id="service">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Nos Clients
        </h2>
        <p className="text-neutralGrey">
          Nous avons travaillé avec des entreprises de renom à travers le monde.
        </p>

        <div className="my-12 flex flex-wrap justify-center items-center gap-8">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client.logo}
              alt={client.name}
              className="h-16 w-auto hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Gérez toute votre communauté dans un seul système
        </h2>
        <p className="text-neutralGrey">À qui s'adresse Nextcent ?</p>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((item) => (
          <div
            key={item.id}
            className="px-6 py-8 text-center bg-white md:w-[300px] mx-auto rounded-md shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center"
          >
            <div className="bg-brandPrimary mb-6 h-16 w-16 flex items-center justify-center rounded-tl-3xl rounded-br-3xl text-white text-3xl">
              <i className={item.icone} />
            </div>
            <h4 className="text-2xl font-bold text-neutralDGrey mb-3">
              {item.titre}
            </h4>
            <p className="text-sm text-neutralGrey">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
