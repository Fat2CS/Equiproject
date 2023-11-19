"use client";
import Pronavbar from "@/components/Pronavbar";
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

import { useRouter } from "next/navigation";

function AnnoncesCreate() {
  const router = useRouter();
  const [catégories, setCatégories] = useState("");
  const [métiers, setMétiers] = useState("");
  const [experience, setExperience] = useState("");
  const [lieu, setLieu] = useState("");
  const [durée, setDurée] = useState("");
  const [description, setDescription] = useState("");

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
      <div className="flex">
        <Pronavbar />
        <div className="relative px-23   lg:px-2 ">
          <div>
            <h1>Quel prestataire recherchez-vous?</h1>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm lg:max-w-lg ">
            <form className="space-y-6 lg:ml-4">
              <div className=" ">
                <div>
                  {/* Sélecteur de catégorie */}
                  <label>
                    Quelle Catégorie ?
                    <select
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
                    <label>
                      Quel Métier ?
                      <select>
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

                <label>
                  Quel Niveau d'expérience ?
                  <select>
                    <option value="">Sélectionnez un métier</option>
                    <option value="débutant">Débutant</option>
                    <option value="Intermédiaire">Intermédiaire</option>
                    <option value="expert">Expert</option>
                  </select>
                </label>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-letter-grey"
                  >
                    Niveau d'expérience
                  </label>
                  <div className="mt-2">
                    <input
                      id="experience"
                      placeholder="L'écurie Jolie"
                      name="experience"
                      type="text"
                      autoComplete="expérience"
                      required
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="  block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button lg:w-1/2  placeholder-gray-600"
                    />
                  </div>
                </div>

                <div className="flex  ">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-letter-grey"
                    >
                      Lieu de la mission
                    </label>
                    <div className="mt-2">
                      <input
                        id="lieu"
                        placeholder="06 07 99 00 56"
                        name="lieu"
                        type="text"
                        // autoComplete="phone"
                        required
                        value={lieu}
                        onChange={(e) => setLieu(e.target.value)}
                        className="  block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button placeholder-gray-600 "
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-letter-grey"
                    >
                      Durée de la mission
                    </label>
                    <div className="mt-2">
                      <input
                        id="durée"
                        placeholder="Un mois"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={durée}
                        onChange={(e) => setDurée(e.target.value)}
                        className="  block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button  placeholder-gray-600 "
                      />
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-letter-grey"
                    >
                      Quelle est la durée envisagée et le budget prévu? Le
                      mission exacte et le montant de votre rénumération
                    </label>
                    <div className="mt-2">
                      <textarea
                        placeholder="Nous recherchons un groom sérieux ... "
                        id="description"
                        name="description"
                        type="text"
                        autoComplete=""
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="  block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-gray-600 "
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-full bg-letter-orange px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-letter-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-letter-orange-600 lg:w-2/3 lg:mx-auto"
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
