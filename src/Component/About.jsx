import React from "react";

export default function About() {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img
              src="./images/IMG_20240116_215528-removebg-preview.png"
              alt="image"
            />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Découvrez notre impact au cours des trois dernières années
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Nous avons aidé des milliers de membres à se connecter, collaborer
              et réussir. Grâce à nos solutions technologiques avancées, nous
              avons favorisé l'organisation de plus de 10 000 événements et
              soutenu plus de 5 000 associations locales et nationales.
            </p>
            <button className="btn-primary">En savoir plus</button>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Soutenir une <br />
              <span className="text-brandPrimary">
                entreprise locale à se réinventer
              </span>
            </h2>
            <p>
              Nous croyons au pouvoir de l'innovation locale. Notre mission est
              de fournir des outils et des ressources aux organisations pour
              qu'elles puissent prospérer dans un monde en constante évolution.
            </p>
          </div>

          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-center gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <i className="fa fa-users text-4xl text-brandPrimary" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    345,127
                  </h4>
                  <p>Membres actifs</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-calendar-check text-4xl text-brandPrimary" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    10,824
                  </h4>
                  <p>Événements organisés</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-handshake text-4xl text-brandPrimary" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    5,672
                  </h4>
                  <p>Clubs et associations soutenus</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <i className="fas fa-money-bill-wave text-4xl text-brandPrimary" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    12,457
                  </h4>
                  <p>Paiements traités</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
