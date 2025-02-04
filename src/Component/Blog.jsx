import React from "react";
import { blog } from "../Constant/data";

export default function Blog() {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="blog">
      <div className="text-center md:w-1/2 mx-auto mb-12">
        <h2 className="text-4xl text-neutralDGrey font-bold mb-4">
          Découvrez nos derniers articles
        </h2>
        <p className="md:w-3/4 text-base text-neutralGrey leading-relaxed mx-auto">
          Explorez les idées, astuces et perspectives partagées par nos experts.
          Ces articles sont conçus pour vous inspirer et vous guider dans votre
          voyage professionnel ou personnel.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {blog.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={`Image pour ${item.titre}`}
              className="w-full h-64 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
            />

            <div className="bg-white p-6 text-center">
              <h3 className="text-xl text-neutralDGrey font-semibold mb-4">
                {item.titre}
              </h3>
              <p className="text-neutralGrey text-sm leading-relaxed mb-6">
                {item.description}
              </p>
              <a
                href={item.link}
                className="text-brandPrimary font-bold text-sm hover:text-blue-700 transition"
              >
                Lire la suite <i className="fa fa-arrow-right" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
