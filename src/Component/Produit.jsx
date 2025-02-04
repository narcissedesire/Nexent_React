import React from "react";

export default function Produit() {
  return (
    <div id="product" className="">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 group">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="./images/IMG_20240116_215528-removebg-preview.png"
              alt="Produit"
              className="w-full max-w-md mx-auto lg:mx-0"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl text-neutralDGrey font-bold mb-6">
              Découvrez le produit qui transforme votre quotidien
            </h2>
            <p className="text-neutralGrey text-base leading-relaxed mb-6">
              Ce produit innovant est conçu pour simplifier vos tâches
              quotidiennes et vous offrir une expérience utilisateur
              exceptionnelle. Avec plus de 100 000 utilisateurs satisfaits, il
              s'est imposé comme un incontournable dans son domaine. Essayez-le
              aujourd'hui et voyez la différence.
            </p>
            <button className="btn-primary px-6 py-3 text-white rounded-lg hover:bg-blue-600 transition">
              En savoir plus
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <img
              src="./images/IMG_20240116_214450-removebg-preview.png"
              alt="Témoignage"
              className="w-full max-w-sm mx-auto lg:mx-0"
            />
          </div>

          <div className="flex-1">
            <p className="text-neutralGrey text-base leading-relaxed mb-8">
              "Ce produit a véritablement révolutionné la manière dont nous
              travaillons. Grâce à son design intuitif et ses fonctionnalités
              avancées, nous avons économisé des heures de travail chaque
              semaine. Je le recommande vivement à toutes les entreprises
              souhaitant optimiser leur efficacité."
            </p>
            <h5 className="text-brandPrimary text-xl font-semibold mb-2">
              Tim Smith
            </h5>
            <p className="text-base text-neutralGrey mb-8">
              CEO, Tech Innovations
            </p>

            <div className="flex items-center gap-4">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className="fas fa-square text-brandPrimary text-sm hover:scale-110 transition-transform"
                />
              ))}
              <a
                href="#"
                className="text-brandPrimary font-bold text-base hover:text-neutralDGrey transition"
              >
                Voir tous les témoignages <i className="fa fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
