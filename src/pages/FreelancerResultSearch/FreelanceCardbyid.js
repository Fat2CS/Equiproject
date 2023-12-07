"use client";
import React, { useEffect, useState } from "react";
import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "../../firebase";
import FreeNavbar from "../../components/FreeNavbar";
import FreeNavbarW from "../../components/FreeNavbarW";
// icons
import { PiEnvelopeThin } from "react-icons/pi";

import { FaMagnifyingGlass } from "react-icons/fa6";

import { PiNewspaperClippingLight } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";

import { FaPencil } from "react-icons/fa6";
import FreelancerSearchById from "../../components/FreelancerSearchById";

const FreelanceCardbyid = () => {
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
    <div>
      <div className="text-letter-orange">
        <h1>Bienvenue userData.name, </h1>
      </div>
      <div className="md:flex md:flex-row h-screen bg-black-body">
        {/* Barre de navigation supérieure */}

        <FreeNavbar />

        {/* Contenu principal */}
        <div className="flex flex-wrap">
          {/* Barre latérale de navigation */}
          <FreeNavbarW />
        </div>

        <FreelancerSearchById />
      </div>
    </div>
  );
};

export default FreelanceCardbyid;
