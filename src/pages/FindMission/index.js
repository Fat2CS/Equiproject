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

const FindMission = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [available, setAvailable] = useState(true);

  const [job, setJob] = useState("");
  const [locality, setLocality] = useState("");
  const [level, setLevel] = useState("");
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

  return (
    <div className="flex flex-col h-screen bg-black-body">
      {/* Barre de navigation supérieure */}

      <div className="text-letter-orange">
        <h1>Bienvenue userData.name, </h1>
      </div>
      <div className="bg-black-buttonshadow w-full p-2  flex items-center justify-between flex-row md:text-base md:hidden">
        {/* ... */}
        <nav className="flex items-center space-x-16 justify-around m-auto">
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
            <Link href={"/ProfilPro"}>
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
            <div className="text-letter-grey font-bold text-center text-lg mt-4">
              <h1>Trouve la mission de tes rêves </h1>
            </div>
          </div>

          {/* Conteneur de graphiques */}
          <div className=" mt-8 flex flex-col md:flex-row  space-x-0 space-y-2 md:space-x-4 md:space-y-0  ">
            {/* Premier conteneur - Graphe des utilisateurs */}
            <div className=" text-letter-grey w-full md:w-1/3 p-4 shadow  ">
              <form onSubmit={""} className="space-y-6 lg:ml-4">
                <div>
                  <div className="mt-2">
                    <input
                 
                      id="job"
                      name="job"
                      type="job"
                      autoComplete="job"
                      required
                      // ref={}

                      className="block w-full rounded-full border-0 py-3.5  px-2 text-grey shadow-sm ring-1 ring-inset ring-letter-grey-900 placeholder-letter-grey focus:ring-2 focus:ring-inset focus:ring-letter-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between"></div>
                  <div className="mt-2">
                    <input
                      id="Locality"
                      name="Locality"
                      type="Locality"
                    //   ref={localityRef}
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-full border-0 py-3.5  px-2 text-grey shadow-sm ring-1 ring-inset ring-letter-grey-300 placeholder-letter-grey focus:ring-2 focus:ring-inset focus:ring-letter-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="mt-2">
                    <input
                      id="Level"
                      name="Level"
                      type="Level"
                    //   ref={lPasswordRef}
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-full border-0 py-3.5  px-2 text-grey shadow-sm ring-1 ring-inset ring-letter-grey-300 placeholder-letter-grey focus:ring-2 focus:ring-inset focus:ring-letter-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-full bg-letter-orange px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-letter-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-letter-orange-600"
                  >
                    Me connecter
                  </button>
                </div>
              </form>
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

          <div className="mt-5">
            <span
              className=" text-lg font-bold text-letter-grey border-b-2 border-border-black-button
                     mb-4
                    "
            >
              {" "}
              Candidatures
            </span>
          </div>
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
          <div className="mt-5">
            <span
              className=" text-lg font-bold text-letter-grey border-b-2 border-border-black-button
                     mb-4
                    "
            >
              {" "}
              Avis
            </span>
          </div>

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

export default FindMission;
