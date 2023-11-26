"use client";
import Pronavbar from "@/components/Pronavbar";
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

import { useRouter } from "next/router";


function AnnoncesCreate() {
  const router = useRouter();


  const [catégories, setCatégories] = useState("");
  const [métiers, setMétiers] = useState("");
  const [experience, setExperience] = useState("");
  const [lieu, setLieu] = useState("");
  const [durée, setDurée] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const added = await addDataToFireStore(
      catégories,
      métiers,
      experience,
      lieu,
      durée,
      description,
      userId
    );
    if (added) {
      setCatégories("");
      setMétiers("");
      setExperience("");
      setLieu("");
      setDurée("");
      setDescription("");
      setUserId("");

      alert("création de l'annonce réussie");
      router.push(`/Validation/${userId}`);
    }
  };

  async function addDataToFireStore(
    catégories,
    métiers,
    experience,
    lieu,
    durée,
    description
  ) {
    try {
      console.log(
        "Attempting to add data:",
        catégories,
        métiers,
        experience,
        lieu,
        durée,
        description
      );

      const collectionRef = collection(db, "Annonces");
      console.log("Collection Reference:", collectionRef);

      const docRef = await addDoc(collectionRef, {
        catégories: selectedCategory,
        métiers: métiers,
        experience: experience,
        lieu: lieu,
        durée: durée,
        description: description,
        userId: userId
      });

      console.log("Document reference:", docRef.id);
      router.push(`/Validation/${userId}`);
      return true;
    } catch (error) {
      console.error("Error adding data", error);
      return false;
    }
  }

  const [selectedCategory, setSelectedCategory] = useState(""); // État pour la catégorie sélectionnée

  // Options pour les catégories
  const categories = [
    "Enseignement et entrainement",
    "Bien être animal",
    "Écurie",
    "Concours"
  ];

  // Options pour les métiers en fonction de la catégorie sélectionnée
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

  return (
    <>
     
      <div className="flex ">
        {/* <div className="lg:block hidden ">
          <Pronavbar className="m-0 p-0" />
        </div> */}

        <div className="sm:m-8 px-2 sm:w-full md:w-1/2 md:px-2 md:mt-20 md:pt-4 md: ">
          <div className="text-letter-grey  mt-10 text-lg lg:mt-6 md:ml-20 md:pl-7 mb-15">
            <h1>Quel prestataire recherchez-vous?</h1>
          </div>
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm lg:max-w-lg  ">
            <form onSubmit={handleSubmit} className="space-y-6 lg:ml-4">
              <div className=" ">
                <div>
                  {/* Sélecteur de catégorie */}
                  <label className="text-letter-grey mb-5">
                    Quelle Catégorie ?
                    <select
                      className=" mt-5 block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button lg:w-1/2  placeholder-gray-600"
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
                        className=" block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button lg:w-1/2  placeholder-gray-600"
                        value={métiers}
                        onChange={(e) => setMétiers(e.target.value)}
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

                <label className=" mt-5  block text-sm font-medium leading-6 text-letter-grey">
                  Quel Niveau d'expérience ?
                  <select
                    className=" mt-5 block w-full rounded-full border-0 py-3.5 px-3 pr-10 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button lg:w-2/3
                    placeholder-gray-600"
                    onChange={(e) => setExperience(e.target.value)}
                  >
                    <option value={experience}>
                      Sélectionnez un niveau d'expérience
                    </option>
                    <option value="débutant">Débutant</option>
                    <option value="Intermédiaire">Intermédiaire</option>
                    <option value="expert">Expert</option>
                  </select>
                </label>

                <div className="flex mt-5  ">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-letter-grey"
                    >
                      Lieu de la mission
                    </label>
                    <div className="mt-5">
                      <input
                        id="lieu"
                        placeholder="06 07 99 00 56"
                        name="lieu"
                        type="text"
                        // autoComplete="phone"
                        required
                        value={lieu}
                        onChange={(e) => setLieu(e.target.value)}
                        className=" mb-5 block w-full rounded-full border-0 py-3.5 px-8 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button placeholder-gray-600 "
                      />
                    </div>
                  </div>

                  <div className="ml-5">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-letter-grey"
                    >
                      Durée de la mission
                    </label>
                    <div className="mt-5">
                      <input
                        id="durée"
                        placeholder="Un mois"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={durée}
                        onChange={(e) => setDurée(e.target.value)}
                        className=" mb-5 block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button  placeholder-gray-600 "
                      />
                    </div>
                  </div>
                </div>

                <div className="flex mt-10">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-letter-grey"
                    >
                      Quelle est la durée envisagée et le budget prévu? Le
                      mission exacte et le montant de votre rénumération
                    </label>
                    <div className="mt-5">
                      <textarea
                        placeholder="Nous recherchons un groom sérieux ... "
                        id="description"
                        name="description"
                        type="text"
                        autoComplete=""
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="  block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-gray-600 resize "
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className=" mt-10 flex w-full justify-center rounded-full bg-letter-orange px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-letter-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-letter-orange-600 lg:w-2/3 lg:mx-auto"
                  >
                    Valider
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnnoncesCreate;
