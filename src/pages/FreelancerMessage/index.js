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
import Chat from "/src/components/Chat";

import { FaPencil } from "react-icons/fa6";

const FreelancerMessage = () => {

  const messages = [
    { text: "Hello!", sender: "user" },
    { text: "Hi there!", sender: "bot" },
    // ... autres messages
  ];

 

    // const [message, setMessage] = useState("");   
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [available, setAvailable] = useState(true);
  

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
          <div className=" md:w-full py-15 ">
            <Chat messages={messages} />
            
          </div>

          {/* Conteneur de graphiques */}
          

          {/* Quatrième conteneur - Tableau des transactions */}
        </div>
      </div>
    </div>
  );
};

export default FreelancerMessage;
