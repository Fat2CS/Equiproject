import { useState } from "react";
import Image from "next/image";
import { AiFillEnvironment } from "react-icons/ai";
import { PiEnvelopeThin } from "react-icons/pi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";
import AnnonceCard from "@/components/AnnonceCard";
import FreeNavbar from "@/components/FreeNavbar";
import FreeNavbarW from "@/components/FreeNavbarW";
import Pronavbar from "@/components/Pronavbar";
import FreelancerCard from "@/components/FreelancerCard";
export default function FreelancerResultSearch() {
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

  return (
    <>
      <div className="text-letter-orange">
        <h1>Bienvenue userData.name, </h1>
      </div>

      <div className="bg-black-buttonshadow w-full p-2  flex items-center justify-between flex-row md:text-base md:hidden"></div>

      <div className=" md:flex md:flex-row">
        {/* <FreeNavbar />
        <FreeNavbarW /> */}
<div className="mt-5">
     <Pronavbar />
</div>

<div className=" m-auto text-letter-grey w-full md:w-1/3 p-4 shadow  ">

  <div className="mt-10 text-center text-lg font-bold"><h1>Trouvez le prestataire parfait ! </h1></div>
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
       

      
      </div>
    </>
  );
}