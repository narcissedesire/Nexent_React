import React from "react";

export default function NewsLetter() {
  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
      id="contact"
    >
      <div className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutralDGrey font-semibold mb-6 lg:leading-snug">
            Restez informé avec notre newsletter exclusive
          </h2>
          <p className="text-neutralGrey mb-6">
            Recevez les dernières nouvelles, astuces et actualités directement
            dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Entrez votre email"
              className="px-4 py-3 w-full sm:w-auto border border-neutralGrey rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brandPrimary"
            />
            <button className="btn-primary flex items-center gap-2">
              S'abonner <i className="fa fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
