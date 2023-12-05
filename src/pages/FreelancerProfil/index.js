"use client";
import React, { useEffect, useState } from "react";
import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "../../firebase";

// icons
import { PiEnvelopeThin } from "react-icons/pi";

import { FaMagnifyingGlass } from "react-icons/fa6";

import { PiNewspaperClippingLight } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";

import { FaPencil } from "react-icons/fa6";

const FreelancerProfil = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [available, setAvailable] = useState(true);
  //   useEffect(() => {
  //     // Extrait l'ID de l'URL
  //     const userId = router.query.userId;

  //     if (userId) {
  //       fetchDataFromFirestore(userId);
  //     }
  //   }, [router.query.userId]);

  async function fetchDataFromFirestore(userId) {
    try {
      // Obtient la référence du document pour l'utilisateur
      const userDocRef = doc(db, "User", userId);

      // Obtient les données du document
      const userDocSnap = await getDoc(userDocRef);

      // Vérifie si le document existe
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        setUserData(userData);
      } else {
        // Gère le cas où le document n'existe pas
        console.error("Document not found");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  //   if (!userData) {
  //     // Affiche un indicateur de chargement ou un message d'erreur si nécessaire
  //     return <div className="text-letter-grey">Loading...</div>;
  //   }

  return (
    <div className="flex flex-col h-screen bg-black-body">
      {/* Barre de navigation supérieure */}

      <div className="text-letter-orange">
        <h1>Bienvenue userData.name, </h1>
      </div>
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

      {/* Contenu principal */}
      <div className="flex-1 flex flex-wrap">
        {/* Barre latérale de navigation */}
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
                    Trouver une mission{" "}
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
                    Suivre mes candidatures{" "}
                  </ul>
                </div>
              </div>{" "}
            </Link>
            {/* <Link href={""}>
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
            </Link> */}
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

          {/* ... */}
        </div>

        {/* Zone de contenu principal */}
        <div className="flex-1 p-4 w-full ">
          {/* Champ de recherche */}
          <div className="md:relative md:w-1/3 py-15 ">
            <div className="profil rounded-full picture w-40 h-40 bg-letter-orange m-auto  "></div>

            <div className="text-letter-grey text-center text-lg mt-4">
              <h1>userData.name</h1>

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

          {/* Conteneur de graphiques */}
          <div className=" mt-8 flex flex-col md:flex-row  space-x-0 space-y-2 md:space-x-4 md:space-y-0  ">
            {/* Premier conteneur - Graphe des utilisateurs */}
            <div className=" text-letter-grey w-full md:w-1/3 bg-black-button p-4 shadow rounded-lg border border-border-black-button">
              <div className="textfirstcontainer  mt-3">
                <h1 className="sm:text-base lg:text:oxl mb-3">userData.name</h1>

                <h2 className="mb-3">userData.business</h2>
                <h2 className="mb-3">userData.postal</h2>
              </div>
              <span className="mb-3">Drescription</span>
              <span>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                laborum alias, iure, inventore fugit autem dolorum provident
                nulla voluptatum et corrupti qui magni cum suscipit commodi sit
                tempora, nobis atque.
              </span>
            </div>

            {/* Deuxième conteneur - Graphe des commerces */}
            <div className="w-full md:w-2/3">
              <span
                className=" text-lg font-bold text-letter-grey border-b-2 border-border-black-button
                    mt-8 mb-4
                    "
              >
                {" "}
                Description
              </span>
              <div className=" bg-black-button border border-border-black-button p-4 shadow rounded-lg  text-letter-grey overflow-y-auto relative mt-5">
                <div className="flex justify-end">
                  <FaPencil className="text-letter-orange mt-1 mr-2" />
                </div>
                <h1>Description </h1>
                <h1>userData.description</h1>
                <span>Décris toi en quelques mots </span>
                <h1>Expériences </h1>
                <h1>userData.level</h1>
                <span></span>
              </div>

<div className="mt-5"><span
                className=" text-lg font-bold text-letter-grey border-b-2 border-border-black-button
                     mb-4
                    "
              >
                {" "}
                Éxpériences
              </span></div>
              
              <div className="w-full  mt-5  bg-black-button border border-border-black-button p-4 shadow rounded-lg  text-letter-grey overflow-y-auto">
                
            <div className="flex justify-end">
              <FaPencil className="text-letter-orange mt-1 mr-2" />
            </div>
            <h1>Expériences </h1>
            <h1>userData.level</h1>
            <span>Décris toi en quelques mots </span>
          </div>
            </div>
          </div>


          {/* Troisième conteneur - Tableau des autorisations en attente */}

          <div className="mt-5"><span
                className=" text-lg font-bold text-letter-grey border-b-2 border-border-black-button
                     mb-4
                    "
              >
                {" "}
                Candidatures
              </span></div>
          <div className=" h-40vh md:flex  md:space-x-10 md:text-center mt-5 bg-black-button border border-border-black-button p-4 shadow rounded-lg text-letter-grey m-auto ">
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
          </div>

          {/* Quatrième conteneur - Tableau des transactions */}
          <div className="mt-5"><span
                className=" text-lg font-bold text-letter-grey border-b-2 border-border-black-button
                     mb-4
                    "
              >
                {" "}
                Avis
              </span></div>
          
          <div className="mt-8 border border-border-black-button bg-black-button p-4 shadow rounded-lg text-letter-grey">
            <span>Avis </span>
            <div>
              <span>Merci pour ton ravaille groom soigneuse et sérieuse</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfil;
