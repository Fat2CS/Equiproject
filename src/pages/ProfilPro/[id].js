"use client";
import React, { useEffect, useState } from "react";
import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "../../firebase";

const ProfilPro = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Extrait l'ID de l'URL
    const { id } = router.query;

    // Vérifie si l'ID est présent dans l'URL
    if (id) {
      fetchDataFromFirestore(id);
    }
  }, [router.query.id]);

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

  if (!userData) {
    // Affiche un indicateur de chargement ou un message d'erreur si nécessaire
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col h-screen bg-black-body">
      {/* Barre de navigation supérieure */}

      <div className="text-letter-orange">
        <h1>Bienvenue {userData.name}, </h1>
      </div>
      <div className="bg-black-button text-white shadow w-full p-2 flex items-center justify-between">
        {/* ... */}
        <nav></nav>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 flex flex-wrap">
        {/* Barre latérale de navigation */}
        <div
          className="p-2 bg-black-button w-full md:w-60 flex-col md:flex hidden"
          id="sideNav"
        >
          {/* ... */}
        </div>

        {/* Zone de contenu principal */}
        <div className="flex-1 p-4 w-full md:w-1/2">
          {/* Champ de recherche */}
          <div className="relative max-w-md w-full">{/* ... */}</div>

          {/* Conteneur de graphiques */}
          <div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
            {/* Premier conteneur - Graphe des utilisateurs */}
            <div className="flex-1 bg-black-button p-4 shadow rounded-lg md:w-1/2 lg:1/3">
              {/* ... */}
              <div
                className="chart-container"
                style={{ position: "relative", height: "150px", width: "100%" }}
              >
                {/* Canvas pour le graphique */}
                {/* <Chart type="line" data={usersChartData} /> */}
              </div>
            </div>

            {/* Deuxième conteneur - Graphe des commerces */}
            <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
              {/* ... */}
              <div
                className="chart-container"
                style={{ position: "relative", height: "150px", width: "100%" }}
              >
                {/* Canvas pour le graphique */}
                {/* <Chart type="line" data={commercesChartData} /> */}
              </div>
            </div>
          </div>

          {/* Troisième conteneur - Tableau des autorisations en attente */}
          <div className="mt-8 bg-white p-4 shadow rounded-lg">{/* ... */}</div>

          {/* Quatrième conteneur - Tableau des transactions */}
          <div className="mt-8 bg-white p-4 shadow rounded-lg">{/* ... */}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPro;
