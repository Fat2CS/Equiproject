import React from "react";
import { useState } from "react";
import { PiEnvelopeThin } from "react-icons/pi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";

const AnnonceApproved = () => {
  const [description, setDescription] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="flex">
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
                  Mon Tableau de bord {" "}
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
                  Profil à valider{" "}
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
                  Abnonce à valider
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
      ;
      <div className="w-full">
        {/* <div className="mt-8 flex flex-wrap  w-full"> */}
        <div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0 w-full">
          {/* Premier conteneur */}
          {/* Section 1 - Graphe des utilisateurs */}

          {/* Deuxième conteneur */}
          {/* Section 2 - Graphe des commerces */}
        </div>
        {/* Troisième conteneur en dessous des deux précédents */}
        {/* Section 3 - Tableau des autorisations en attente */}
        <div className="mt-8 bg-white p-4 shadow rounded-lg">
          <h2 className="text-gray-500 text-lg font-semibold pb-4">
            Annonce à valider
          </h2>
          <div className="my-1"></div> {/* Espace de séparation */}
          <div className="bg-letter-orange h-px mb-6"></div>{" "}
          {/* Ligne avec dégradé */}
          <div className="overflow-y-auto h-1/2">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-black"
              >
                Date de publication
              </label>
              <div className="mt-2 w-1/4">
                <input
                  id="date"
                  name="date"
                  type="date"
                  autoComplete="date"
                  required
                  // ref={emailRef}
                  className=" block w-full rounded-full border  py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button "
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className=" mt-5 block text-sm font-medium leading-6 text-black"
              >
                Métier
              </label>
              <div className="mt-2 w-1/5">
                <input
                  id="métier"
                  name="métier"
                  type="métier"
                  autoComplete="métier"
                  required
                  // ref={emailRef}
                  className=" block w-full rounded-full border  py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button "
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className=" mt-5 block text-sm font-medium leading-6 text-black"
              >
                Catégorie
              </label>
              <div className="mt-2 w-1/5">
                <input
                  id="métier"
                  name="métier"
                  type="métier"
                  autoComplete="métier"
                  required
                  // ref={emailRef}
                  className=" block w-full rounded-full border  py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button "
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className=" mt-5 block text-sm font-medium leading-6 text-black"
              >
                Niveau d'expérience
              </label>
              <div className="mt-2 w-1/5">
                <input
                  id="métier"
                  name="métier"
                  type="métier"
                  autoComplete="métier"
                  required
                  // ref={emailRef}
                  className=" block w-full rounded-full border  py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button "
                />
              </div>
            </div>
            <div className=" w-1/3 mt-5">
              <label>Description</label>
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

            <label className="relative inline-flex cursor-pointer items-center mt-8 flex-col">
              Annonce valider ?
              <input
                type="checkbox"
                value=""
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="peer sr-only"
              />
              <div className="peer flex h-8 items-center gap-4 rounded-full bg-orange-600 px-3 after:absolute after:left-1 after: after:h-6 after:w-16 after:rounded-full after:bg-white/40 after:transition-all after:content-[''] peer-checked:bg-stone-600 peer-checked:after:translate-x-full peer-focus:outline-none dark:border-slate-600 dark:bg-slate-700 text-sm text-white">
                <span>Approuvé </span>
                <span>Rejeté</span>
              </div>
            </label>
          </div>
          <div className="mb-12">
            <button className="bg-letter-orange bg-opacity-80 text-letter-grey border  hover:bg-letter-grey hover:text-black-body font-bold py-2 px-4 rounded-full mt-8">
              Modifier
            </button>

            <button className=" mr-8 bg-red bg-opacity-80 text-letter-grey border  hover:bg-letter-grey hover:text-black-body font-bold py-2 px-4 rounded-full mt-8">
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnonceApproved;
