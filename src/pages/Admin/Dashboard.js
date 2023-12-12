import React from "react";

import { PiEnvelopeThin } from "react-icons/pi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";

const Dashboard = () => {
  const listAnnonces = [
    {
      date: "2023-01-01",
      métier: "Groom",
      niveaudexpérience: "Expert",
      localité: "Paris",
      durée: "1 mois",
      description: "Je suis un groom",
      approuvé: "Oui"
    },
    {
      date: "2023-01-01",
      métier: "Groom",
      niveaudexpérience: "Expert",
      localité: "Paris",
      durée: "1 mois",
      description: "Je suis un groom",
      approuvé: "Oui"
    }
  ];

  const listProfil = [
    {
      date: "2023-01-01",
      métier: "Groom",
      niveaudexpérience: "Expert",
      localité: "Paris",

      description: "Je suis un groom",
      approuvé: "Oui"
    },
    {
      date: "2023-01-01",
      métier: "Groom",
      niveaudexpérience: "Expert",
      localité: "Paris",

      description: "Je suis un groom",
      approuvé: "Oui"
    }
  ];

  return (
    <div className="flex">
      <div className="bg-black-buttonshadow w-full p-2  flex items-center justify-between flex-row md:text-base md:hidden">
        {/* ... */}
        <nav className="flex items-center space-x-16 justify-around m-auto">
          {/* <Link href={`/Message/{${id}`}>
    <div className="items-center space-x-4 text-letter-grey">
      <PiEnvelopeThin className="text-letter-orange mt-1 mr-2 w-5 h-5" />
    </div>{" "}
  </Link> */}

          <Link href="/FindMission">
            <div className=" items-center space-x-4 text-letter-grey">
              <FaMagnifyingGlass className="text-letter-orange mt-1 mr-2 w-5 h-5" />
            </div>
          </Link>
          <Link href="/ProfilPro">
            <div className=" items-center space-x-4 text-letter-grey">
              <PiNewspaperClippingLight className="text-letter-orange mt-1 mr-2 w-5 h-5" />
            </div>{" "}
          </Link>
          <Link href="/ProfilPro">
            <div className=" items-center space-x-4 text-letter-grey">
              <BsPersonWorkspace className="text-letter-orange mt-1 mr-2 w-5 h-5" />
            </div>{" "}
          </Link>
          <Link href={"/CreateAnnonce/"}>
            <div className=" items-center space-x-4 text-letter-grey">
              <RiLogoutCircleRLine className="text-letter-orange mt-1 mr-2 w-5 h-5" />
            </div>
          </Link>
        </nav>
      </div>
      <div
        className="p-2 bg-black-button w-full md:w-60 flex-col md:flex hidden"
        id="sideNav"
      >
        <nav>
          <Link href={""}>
            <div className="flex ml-2 mt-9">
              <div>
                <PiEnvelopeThin className="text-letter-orange mt-1 mr-2 w-5 h-5" />
              </div>
              <div>
                <ul className="flex items-center space-x-4 text-letter-grey">
                  {" "}
                  Message{" "}
                </ul>
              </div>
            </div>{" "}
          </Link>
          <Link href={"/FindMission"}>
            <div className="flex ml-2 mt-9">
              <div>
                <FaMagnifyingGlass className="text-letter-orange mt-1 mr-2" />
              </div>
              <div>
                <ul className="flex items-center space-x-4 text-letter-grey">
                  {" "}
                  Profil à valider{" "}
                </ul>
              </div>
            </div>{" "}
          </Link>

          <Link href="/ProfilPro">
            <div className="flex ml-2 mt-9">
              <div>
                <PiNewspaperClippingLight className="text-letter-orange mt-1 mr-2" />
              </div>
              <div>
                <ul className="flex items-center space-x-4 text-letter-grey">
                  Abnonce à valider
                </ul>
              </div>
            </div>{" "}
          </Link>

          <Link href="/ProfilPro">
            <div className="flex ml-2 my-10">
              <div>
                <RiLogoutCircleRLine className="text-letter-orange mt-1 mr-2" />
              </div>

              <div>
                <ul className="flex items-center space-x-4 text-letter-grey">
                  {" "}
                  Déconnecter{" "}
                </ul>
              </div>
            </div>{" "}
          </Link>
        </nav>
      </div>
      ;
      <div className="w-full">
        {/* <div className="mt-8 flex flex-wrap  w-full"> */}
        <div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0 w-full">
          {/* Premier conteneur */}
          {/* Section 1 - Graphe des utilisateurs */}
          <div className="flex-1 bg-black-body p-4 shadow rounded-lg md:w-1/2">
            <div className="profil rounded-full picture w-40 h-40 bg-letter-orange m-auto text-xl flex items-center justify-center text-letter-grey mb-5 ">
              24
            </div>
            <h2 className="text-letter-grey text-lg font-semibold pb-1 text-center">
              Annonce Validés
            </h2>
            <div className="my-1"></div> {/* Espace de séparation */}
            <div className="bg-letter-orange h-px mb-6"></div>{" "}
            {/* Ligne avec dégradé */}
          </div>

          {/* Deuxième conteneur */}
          {/* Section 2 - Graphe des commerces */}
          <div className="flex-1 bg-black-body p-4 shadow rounded-lg items-center">
            <div className="profil rounded-full picture w-40 h-40 bg-letter-orange m-auto text-xl flex items-center justify-center text-letter-grey mb-5 ">
              24
            </div>
            <h2 className="text-letter-grey text-lg font-semibold pb-1 text-center ">
              Profil validés
            </h2>
            <div className="rounded-full bg-letter-orange h-15 w-15"></div>{" "}
            {/* Espace de séparation */}
            <div className="bg-letter-orange  h-px mb-6"></div>{" "}
            {/* Ligne avec dégradé */}
          </div>
        </div>
        {/* Troisième conteneur en dessous des deux précédents */}
        {/* Section 3 - Tableau des autorisations en attente */}
        <div className="mt-8 bg-white p-4 shadow rounded-lg">
          <h2 className="text-gray-500 text-lg font-semibold pb-4">
            Annonce à valider
          </h2>
          <div className="my-1"></div> {/* Espace de séparation */}
          <div className="bg-letter-orange h-px mb-6"></div>{" "}
          {/* Ligne avec dégradé */}
          <div className="overflow-y-auto h-32">
            <table className="w-full table-auto text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Métier</th>
                  <th className="px-4 py-2">Niveau d'expérience</th>
                  <th className="px-4 py-2">Localité</th>
                  <th className="px-4 py-2">Durée</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Approuvé</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {listAnnonces.map((msg, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    <td className=" px-4 py-2">{msg.date}</td>
                    <td className=" px-4 py-2">{msg.métier}</td>
                    <td className=" px-4 py-2">{msg.niveaudexpérience}</td>
                    <td className=" px-4 py-2">{msg.localité}</td>
                    <td className=" px-4 py-2">{msg.durée}</td>
                    <td className=" px-4 py-2">{msg.description}</td>
                    <td className=" px-4 py-2">{msg.approuvé}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Bouton "Voir plus" pour le tableau des autorisations en attente */}
          <div className="text-right mt-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
              Voir plus
            </button>
          </div>
        </div>
        {/* Quatrième conteneur */}
        {/* Section 4 - Tableau des transactions */}

        <div className="mt-8 bg-white p-4 shadow rounded-lg">
          <h2 className="text-gray-500 text-lg font-semibold pb-4">
            Profil à valider
          </h2>
          <div className="my-1"></div> {/* Espace de séparation */}
          <div className="bg-letter-orange h-px mb-6"></div>{" "}
          {/* Ligne avec dégradé */}
          <div className="overflow-y-auto h-32">
            <table className="w-full table-auto text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Métier</th>
                  <th className="px-4 py-2">Niveau d'expérience</th>
                  <th className="px-4 py-2">Localité</th>

                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Approuvé</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {listProfil.map((msg, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    <td className=" px-4 py-2">{msg.date}</td>
                    <td className=" px-4 py-2">{msg.métier}</td>
                    <td className=" px-4 py-2">{msg.niveaudexpérience}</td>
                    <td className=" px-4 py-2">{msg.localité}</td>

                    <td className=" px-4 py-2">{msg.description}</td>
                    <td className=" px-4 py-2">{msg.approuvé}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Bouton "Voir plus" pour le tableau des autorisations en attente */}
          <div className="text-right mt-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
              Voir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
