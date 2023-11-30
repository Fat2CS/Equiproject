"use client";
import React, { useEffect, useState } from "react";
import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "../../firebase";
import Image from "next/image";
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

  const [selectedCategory, setSelectedCategory] = useState(""); // État pour la catégorie sélectionnée

  // Options pour les catégories
  const categories = [
    "Enseignement et entrainement",
    "Bien être animal",
    "Écurie",
    "Concours"
  ];

  const getJobsForCategory = (category) => {
    switch (category) {
      case "Enseignement et entrainement":
        return [
          "coach Cso ",
          "coach dressage",
          "cavalier Cso ",
          "cavalier dressage ",
          "ethologie",
          "spectacle ",
          "debourrage",
          "travail du jeune cheval ",
          "valorisation"
        ];
      case "Bien être animal":
        return [
          "khine/ostheo",
          "accupuncteur",
          "masseur ",
          "communication animale",
          "bitfitter",
          "saddlefitter"
        ];
      case "Écurie":
        return [
          "groom maison",
          "palfrenier soigneur",
          "homme/femme d entretien",
          "conducteur d engin"
        ];
      case "Concours":
        return ["groom concours", "groom cavalier", "transporteur (VL,PL,BE)"];
      default:
        return [];
    }
  };
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

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
              <span className="text-sm">Trouvez facilement votre prochaine mission </span>
            </div>
          </div>

          {/* Conteneur de graphiques */}
          <div className=" mt-8 flex flex-col md:flex-row  space-x-0 space-y-2 md:space-x-4 md:space-y-0  ">
            {/* Premier conteneur - Graphe des utilisateurs */}
            <div className=" text-letter-grey w-full md:w-1/3 p-4 shadow  ">
              <form onSubmit={""} className="space-y-6 lg:ml-4">

              <div>
                  {/* Sélecteur de catégorie */}
                  <label className="text-letter-grey mb-5">
                   
                    <select
                      className=" mt-5 block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button placeholder-letter-orange"
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                    >
                      <option value="">Sélectionnez une catégorie</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </label>

                  {/* Sélecteur de métier en fonction de la catégorie sélectionnée */}
                  {selectedCategory && (
                    <label className="text-letter-grey mt-5">
                      Quel Métier ?
                      <select
                        className=" block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button lg:w-1/2  placeholder-letter-orange"
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                      >
                        <option value="">Sélectionnez un métier</option>
                        {getJobsForCategory(selectedCategory).map((job) => (
                          <option key={job} value={job}>
                            {job}
                          </option>
                        ))}
                      </select>
                    </label>
                  )}
                </div>
                <div>
                 
                </div>

                <div>
                  <div className="flex items-center justify-between"></div>



                  <div className="mt-5">
                    <input
                      id="Locality"
                      name="Locality"
                      type="Locality"
                      placeholder="Région"
                          
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-full border  py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-orange"
                    />
                  </div>

                  <div className="mt-5">
                    <input
                      id="Level"
                      name="Level"
                      type="Level"
                      placeholder="Niveau d'expérience"
                    //   ref={lPasswordRef}
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-full border  py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-orange"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-full bg-letter-orange px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-letter-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-letter-orange-600"
                  >
                   Valider
                  </button>
                </div>
              </form>
            </div>

            {/* Deuxième conteneur - Graphe des commerces */}
            <div className="w-full md:w-2/3">

            <Image
              className="rounded-full object-cover mx-auto "
              width={500}
              height={500}
              sizes="(max-width: 640px) 100vw, (max-width: 868px) 50vw, 60vw"
              src="https://res.cloudinary.com/dgkp7pkly/image/upload/v1700833695/EQUINTERIM/aj42obgqctyyktfmq7yv.png"
              alt="cavalier"
            />
            

              
              
            </div>
          </div>

       
         

        
        </div>
      </div>
    </div>
  );
};

export default FindMission;
