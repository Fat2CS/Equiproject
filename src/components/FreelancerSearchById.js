import React from "react";

const FreelancerSearchById = () => {
  const available = true;
  return (
    <div className="flex-1 p-4 w-full ">
      {/* Champ de recherche */}
      <div className="flex">
        <div className="md:relative md:w-1/3 py-15 ">
          <div className="profil rounded-full picture w-40 h-40 bg-letter-orange m-auto  "></div>

          <div className="text-letter-grey text-center text-lg mt-4">
            <div className=" mr-8 flex justify-center">
              {available ? (
                <div className=" mt-3 w-5 h-5 bg-green rounded-full ">
                  {" "}
                  <span className="ml-6 mt-1 "> Disponible</span>{" "}
                </div>
              ) : (
                <div className="w-5 h-5 bg-red rounded-full ">
                  {" "}
                  non disponible
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between text-letter-grey w-full md:w-2/3 bg-black-button rounded-lg p-4 shadow  border-border-black-button ">
          {/* sous la photo */}

          <div className="textfirstcontainer  mt-3">
            <h1 className="sm:text-base lg:text-oxl mb-3">userData.name</h1>

            <h2 className="mb-3">Avis</h2>
          </div>

          <div className="">
            <button
              type="submit"
              className="flex w-2/3 justify-center rounded-full bg-letter-orange px-10 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-letter-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-letter-orange-600"
            >
              Contacter
            </button>
          </div>
        </div>
      </div>

      {/* Conteneur de graphiques */}
      <div className=" mt-8 flex flex-col md:flex-row  space-x-0 space-y-2 md:space-x-4 md:space-y-0  ">
        {/* Premier conteneur - Graphe des utilisateurs */}

        <div className=" text-letter-grey w-full md:w-1/3 bg-black-button p-5 shadow rounded-lg border m-8 border-border-black-button md:h-2/3">
          {/* en face de la photo */}

          <div className="textfirstcontainer  mt-3">
            <h1 className=" text-center sm:text-base lg:text:oxl mb-3">
              Localisation{" "}
            </h1>

            <h2 className="mb-3">userData.postal</h2>
          </div>
        </div>

        {/* Deuxième conteneur - Graphe des commerces */}
        <div className="w-full md:w-2/3">
          <span
            className=" text-lg font-bold text-letter-grey border-b-2 border-border-black-button
                    mt-8 mb-4
                    "
          >
            Description
          </span>
          <div className=" bg-black-button border border-border-black-button p-4 shadow rounded-lg  text-letter-grey overflow-y-auto relative mt-5">
            <div className="flex justify-end"></div>
            <h1>Description </h1>
            <h1>userData.description</h1>
            <span>Décris toi en quelques mots </span>
            <h1>Expériences </h1>
            <h1>userData.level</h1>
            <span></span>
          </div>

          <div className="mt-5">
            <span
              className=" text-lg font-bold text-letter-grey border-b-2 border-border-black-button
                     mb-4
                    "
            >
              {" "}
              Éxpériences
            </span>
          </div>

          <div className="w-full  mt-5  bg-black-button border border-border-black-button p-4 shadow rounded-lg  text-letter-grey overflow-y-auto">
            <div className="flex justify-end"></div>
            <h1>Expériences </h1>
            <h1>userData.level</h1>
            <span>Décris toi en quelques mots </span>
          </div>
        </div>
      </div>

      {/* Troisième conteneur - Tableau des autorisations en attente */}

      {/* <div className="mt-5">
        <span
          className=" text-lg font-bold text-letter-grey border-b-2 border-border-black-button
                     mb-4
                    "
        >
          {" "}
          Candidatures
        </span>
      </div> */}
      {/* <div className=" h-40vh md:flex  md:space-x-10 md:text-center mt-5 bg-black-button border border-border-black-button p-4 shadow rounded-lg text-letter-grey m-auto ">
        <div className=" sm:text-basemd:mt-5">
          {" "}
          <h1>Candidatures </h1>
          <div className="mt-4">
            <span> J'ai candidaté pour le poste de groom</span>
          </div>
        </div>

        <div className="mt-7">
          <div className="text-letter-orange mt-2 text-center text-base">
            <div>
              <span className="text-letter-grey">date</span>
            </div>
          </div>
        </div>

        <div className="mt-9">
          <div>
            <span className="text-letter-grey">lieu</span>
          </div>
        </div>
      </div> */}

      {/* Quatrième conteneur - Tableau des transactions */}
      <div className="mt-5">
        <span
          className=" text-lg font-bold text-letter-grey border-b-2 border-border-black-button
                     mb-4
                    "
        >
          {" "}
          Missions 
        </span>
      </div>

      <div className="mt-8 border border-border-black-button bg-black-button p-4 shadow rounded-lg text-letter-grey">
        <span>Missions remportés  </span>
        <div>
          <span>Ecurie Blue</span>
        </div>
      </div>
    </div>
  );
};

export default FreelancerSearchById;
