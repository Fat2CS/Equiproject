"use client";

import React, { useEffect, useState } from "react";
import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "../firebase";

// icons
import { PiEnvelopeThin } from "react-icons/pi";

import { FaMagnifyingGlass } from "react-icons/fa6";

import { PiNewspaperClippingLight } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";

const ProfilPro = () => {
  const [approuved, setApprouved] = useState(false);
  const userData = {
    improved: false
  };

  return (
    <div className="flex flex-col h-screen bg-black-body m-auto mt-4">
      {/* Barre de navigation supérieure */}

      <div className="text-letter-orange ml-3 mb-3">
        <h1>Bienvenue Mimi, </h1>
      </div>
      <div className="bg-black-buttonshadow w-full p-2  flex items-center justify-between flex-row md:text-base md:hidden">
        {/* ... */}

        <nav className="flex items-center space-x-16 justify-around m-auto">
          <Link href="/ProfilPro">
            <div className="items-center space-x-4 text-letter-grey">
              <PiEnvelopeThin className="text-letter-orange mt-1 mr-2 w-5 h-5" />
            </div>{" "}
          </Link>
          <Link href="/ProfilPro">
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
          <Link href="/ProfilPro">
            <div className=" items-center space-x-4 text-letter-grey">
              <RiLogoutCircleRLine className="text-letter-orange mt-1 mr-2 w-5 h-5" />
            </div>
          </Link>
        </nav>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 flex flex-wrap">
        {/* Barre latérale de navigation */}
        <div
          className="p-2 bg-black-button w-full md:w-60 flex-col md:flex hidden"
          id="sideNav"
        >
          <nav>
            <Link href="/ProfilPro">
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

            <Link href="/BeforeAnnonce">
              <div className="flex ml-2 mt-9">
                <div>
                  <BsPersonWorkspace className="text-letter-orange mt-1 mr-2" />
                </div>
                <div>
                  <ul className="flex items-center space-x-4 text-letter-grey">
                    Déposer une annonce{" "}
                  </ul>
                </div>
              </div>{" "}
            </Link>


            <Link href={"/ProfilPro"}>
              <div className="flex ml-2 mt-9">
                <div>
                  <FaMagnifyingGlass className="text-letter-orange mt-1 mr-2" />
                </div>
                <div>
                  <ul className="flex items-center space-x-4 text-letter-grey">
                    {" "}
                    Trouver un prestataire{" "}
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
                    {" "}
                    Suivre les candidatures{" "}
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

        {/* Zone de contenu principal */}
        <div className="flex-1 p-4 w-full ">
          {/* Champ de recherche */}
          <div className="md:relative md:w-1/3 ">
            <div className="profil rounded-full picture w-40 h-40 bg-letter-orange m-auto  "></div>

            <div className="text-letter-grey text-center text-lg mt-4">
              <h1>userData.name</h1>

              <div className=" mr-8 flex justify-center">
                {approuved ? (
                  <div className=" mt-3 w-5 h-5 bg-green rounded-full ">
                    {" "}
                    <span className="ml-6 mt-1 "> Validé</span>{" "}
                  </div>
                ) : (
                 <div className=" flex flex-row w-25 h-25"> 
              
                  <div className="  w-5 h-5 bg-red rounded-full mb-5 ">
                   <span className="ml-6 w-10"> non validé</span>
                   
                  </div></div>
                )}
              </div>
            </div>
          </div>

          {/* Conteneur de graphiques */}
          <div className=" mt-8 flex flex-col md:flex-row  space-x-0 space-y-2 md:space-x-4 md:space-y-0  ">
            {/* Premier conteneur - Graphe des utilisateurs */}
            <div className=" text-letter-grey w-full md:w-1/3 bg-black-button p-4 shadow rounded-lg border border-border-black-button">
              

              <div className="textfirstcontainer text-center mt-3">
                <h1 className="sm:text-base lg:text:oxl">userData.name</h1>

                <h2>userData.business</h2>
                <h2>userData.postal</h2>
              </div>
            </div>

            {/* Deuxième conteneur - Graphe des commerces */}
            <div className="w-full md:w-2/3 bg-black-button border border-border-black-button p-4 shadow rounded-lg  text-letter-grey text-center overflow-y-auto">
              <h1>Liste de vos annonces </h1>
              <h1>userData.annonces</h1>
            </div>
          </div>

          {/* Troisième conteneur - Tableau des autorisations en attente */}
          <div className=" h-40vh md:flex  md:space-x-10 md:text-center mt-8 bg-black-button border border-border-black-button p-4 shadow rounded-lg text-letter-grey m-auto ">
            <div className="mb-3 sm:text-base text-center md:mt-10">
              {" "}
              <h1>
                Trouvez votre prestataire et réalisez votre première mission sur
                Equintérim !{" "}
              </h1>
              <div className="mt-4">
                <span>
                  {" "}
                  Vous avez le choix entre déposer une annonce ou contacter le
                  profil de votre choix.
                </span>
              </div>
            </div>

            <div className="mt-7">
              <div className="rounded-full h-20 w-20 bg-letter-orange m-auto"></div>
              <div className="text-letter-orange mt-2 text-center text-base">
                <span> Missions terminés </span>
                <div>
                  <span className="text-letter-grey">0</span>
                </div>
              </div>
            </div>
            <div className="mt-7">
              <div className="rounded-full h-20 w-20 bg-letter-orange m-auto"></div>
              <div className="text-letter-orange mt-2 text-center text-base">
                <span> Note attribué </span>
                <div>
                  <span className="text-letter-grey">0</span>
                </div>
              </div>
            </div>
            <div className="mt-7">
              <div className="rounded-full h-20 w-20 bg-letter-orange m-auto"></div>
              <div className="text-letter-orange mt-2 text-center text-base">
                <span> Prestataires engagés </span>
                <div>
                  <span className="text-letter-grey">0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quatrième conteneur - Tableau des transactions */}
          <div className="mt-8 border border-border-black-button bg-black-button p-4 shadow rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPro;
