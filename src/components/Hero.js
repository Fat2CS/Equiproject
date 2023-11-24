"use client";

import Image from "next/image";
import React from "react";
import Footer from "./Footer";
import Link from "next/link";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { AiTwotoneEuroCircle } from "react-icons/ai";

const Hero = () => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  return (
    <div className=" hero overflow-x-hidden">
      <Image
        width={1900}
        height={700}
        sizes="100vw"
        src="https://res.cloudinary.com/dgkp7pkly/image/upload/v1699360308/EQUINTERIM/kkryefdgohsdcvygvzpb.jpg"
        alt="cavalière"
      />

      <div className=" px-2 textHero md:absolute top-11 md:px-0 mt-8 text-center md:text-start">
        <div className="text-letter-grey font-bold ">
          <h1 className=" border border-button-color rounded-xl ml-2 text-oxl sm:mt-0  md:text-4xl lg:text-xl py-2 mt-9 md:border-none ">
            EQUINTERIM
          </h1>
        </div>
        <div>
          <div
            className="flex ml-2 m-6 
            "
          >
            <div className="squareorange bg-letter-orange text-letter-grey font-bold text-sm px-1 md:text-lg md:w-18 py-2 text-center md:text-start">
              La 1er
            </div>
            <div className=" squareblack bg-black-button bg-opacity-80 font-bold text-letter-grey rounded-e-2xl px-2 text-sm md:text-lg md:pr-20 py-2 ">
              intérim du domaine équestre
            </div>
          </div>
          <div className="flex ml-2 ">
            <div className="squareorange bg-letter-orange text-letter-grey font-bold text-sm px-1 md:text-lg md:w-18 py-2  ">
              Faites
            </div>
            <div className=" squareblack bg-black-button bg-opacity-80 font-bold text-letter-grey rounded-e-2xl px-2 text-sm md:text-lg md:pr-20 py-2 ">
              galoper vos opportunités professionnelles
            </div>
          </div>
        </div>
        <div className=" ml-3 signButton mt-6 flex space-x-10  ">
          <div>
            <button class="bg-letter-orange bg-opacity-80 text-letter-grey border  hover:bg-letter-grey hover:text-black-body font-bold py-2 px-4 rounded-full">
              Créer mon compte
            </button>
          </div>
          <div>
            <Link href={"/pages/SignIn"}>
              <button class="bg-black-button bg-opacity-80 text-letter-grey border hover:bg-letter-grey  font-bold py-2 px-4 rounded-full">
                Me connecter
              </button>
            </Link>
          </div>
        </div>
      </div>

      <section
        className="grid grid-cols-1 md:grid-cols-3 gap-2
        px-3 text-justify subHero mt-20 ml-2 md:mt-10"
      >
        <div className="">
          <div className="border border-button-color rounded-xl mb-2 md:border-none md:mb-0 ">
            <h1 className="text-letter-grey text-oxl  lg:text-xl font-bold text-center lg:text-start ">
              LAISSEZ-NOUS
            </h1>
            <h1 className="text-letter-orange text-oxl  md:text-xl font-bold text-center md:text-start ">
              VOUS AIDER !
            </h1>
          </div>

          <div className="py-3 lg:mt-4">
            <div className="textone lg:mb-20">
              <span className="text-letter-orange text-sm lg:text-base ">
                Vous êtes propriétaire d’une écurie et vous en avez assez de
                perdre du temps à chercher du personnel ?
              </span>
            </div>

            <div className="textone lg:mb-20 lg:py-9">
              <span className="text-letter-orange text-sm lg:text-base">
                Vous êtes un prestataire de services, mais vous ne savez pas
                comment trouver votre prochaine mission ?
              </span>
            </div>

            <div className=" py-2">
              <span className="text-letter-grey text-sm lg:text-base ">
                Ne cherchez plus !<br />
                Notre site d’intérim dédié aux métiers de l’équitation est là
                pour simplifier vos besoins de recrutement et de recherche de
                missions. Découvrez comment nous pouvons vous aider à optimiser
                votre temps et à atteindre vos objectifs plus rapidement.
              </span>
            </div>
          </div>
          <div className="devise">
            <div className="text-letter-orange flex space-x-5 font-bold md:lg">
              <div>
                <h2>Passion</h2>
              </div>
              <div>
                <h2>Respect</h2>
              </div>
              <div>
                <h2>Excellence</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="text-letter-grey text-sm py-2 px-2 mt-2  md:text-base sm:text-justify  lg:mb-20 lg:py-9">
          <div className="cercleWithText mt-10 lg:mt-14 lg:pt-5 lg:flex">
            <div className="mt-3 ml-35vw mb-3 lg:ml-0 mr-3  lg:py-9">
              <div className="w-20 h-20 bg-letter-orange rounded-full ">
                <AiTwotoneCheckCircle className="text-letter-grey w-20 h-20 text-center" />
              </div>
            </div>

            <div className="pr-5 mt-5  lg:pt-5 lg:pr-0 lg:text-base">
              <span>
                Nos profils sont validés avec soin, garantissant ainsi que seuls
                les meilleurs professionnels vous sont proposés. <br />
                Nous nous engageons à vous fournir des professionnels de la plus
                haute qualité, grâce à une validation méticuleuse de nos
                profils.
              </span>
            </div>
          </div>

          <div className="cercleWithText mt-10 lg:flex ">
            <div className="mt-3 ml-35vw mb-3 md:ml-0 lg:ml-0 mr-3  lg:py-9">
              <div className="w-20 h-20 bg-letter-orange rounded-full ">
                <AiTwotoneEuroCircle className="text-letter-grey w-20 h-20 text-center" />
              </div>
            </div>

            <div className="pr-5 mt-5">
              <span>
                Nous comprenons l’importance de la stabilité financière pour nos
                prestataires. <br /> Soyez assuré que nous nous engageons à
                respecter des délais de règlement rapides et fiables pour que
                vous puissiez compter sur un partenariat financier solide avec
                nous.
              </span>
            </div>
          </div>
        </div>

        <div className=" md:m-0 signZone  text-letter-grey text-sm py-2 px-2 mt-2  lg:text-lg text-justify">
          <div className="text-center lg:py-10">
            <div className="border-b border-border-black-button mb-12 "></div>
            <h1 className="text-letter-orange ">
              INSCRIVEZ-VOUS DÈS MAINTENANT
            </h1>
            <div className="mt-12 border-t border-border-black-button"></div>
          </div>

          <div className="buttonEmpl mt-5 lg:mt-10 lg:py-2">
            <span className="text-letter-grey text-sm lg:text-base ">
              Si vous êtes employeur vous aurez accès aux meilleurs prestataires
              dans leur domaine et poster un annonce gratuitement !
            </span>
            <div className="text-center ">
              <button class="bg-letter-orange  text-letter-grey border hover:bg-letter-grey hover:text-black-body font-bold py-4 px-4 rounded-full mt-9 ">
                Je crée mon compte
              </button>
            </div>
          </div>

          <div className="buttonEmpl mt-5">
            <span className="text-letter-grey text-sm md:text-base">
              Si vous êtes prestataire, créez votre profil, mettez à jour vos
              disponibilités, et accédez à l’ensemble de nos offres ! 
            </span>
            <div className="text-center">
              <button class="bg-letter-orange  text-letter-grey border  hover:bg-letter-grey hover:text-black-body font-bold py-4 px-7 rounded-full mt-9 ">
                Je m'inscris
              </button>
            </div>
          </div>

          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section>
        <div className="middleTittle text-center text-letter-grey text-base lg:text-xl font-bold py-12 lg:m-10">
          <h1>DECOUVREZ TOUS NOS PRESTATAIRES PAR CATEGORIES </h1>
        </div>

        <div className="flex flex-wrap justify-center items-center text-card-title sm:text-base lg:text-lg">
          <div className="mx-auto sm:w-1/1 lg:w-1/4 text-center  ">
            <Image
              className="rounded-full object-cover mx-auto "
              width={200}
              height={200}
              sizes="(max-width: 640px) 100vw, (max-width: 868px) 50vw, 60vw"
              src="https://res.cloudinary.com/dgkp7pkly/image/upload/c_crop,g_auto,h_800,w_800/EQUINTERIM/t011geg2exfmcuddre10.jpg"
              alt="cavalier"
            />

            <div className="py-2 justify-center">
              <span>
                Enseignement <br />
                et <br /> entraînement
              </span>
            </div>
          </div>
          <div className=" mx-auto sm:w-1/1 lg:w-1/4 text-center">
            <Image
              className="rounded-full object-cover mx-auto"
              width={200}
              height={200}
              sizes="(max-width: 640px) 100vw, (max-width: 868px) 50vw, 60vw"
              src="https://res.cloudinary.com/dgkp7pkly/image/upload/c_crop,g_auto,h_800,w_800/EQUINTERIM/t011geg2exfmcuddre10.jpg"
              alt="cavalier"
            />

            <div className="py-2">
              <span>
                Bien-être
                <br /> animal
              </span>
            </div>
          </div>
          <div className=" mx-auto sm:w-1/1 lg:w-1/4 text-center">
            <Image
              className="rounded-full object-cover mx-auto"
              width={200}
              height={200}
              sizes="(max-width: 640px) 100vw, (max-width: 868px) 50vw, 60vw"
              src="https://res.cloudinary.com/dgkp7pkly/image/upload/c_crop,g_auto,h_800,w_800/EQUINTERIM/t011geg2exfmcuddre10.jpg"
              alt="cavalier"
            />

            <div className="py-2">
              <span>Ecurie</span>
            </div>
          </div>
          <div className=" mx-auto sm:w-1/1 lg:w-1/4 text-center">
            <Image
              className="rounded-full object-cover mx-auto"
              width={200}
              height={200}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 60vw"
              src="https://res.cloudinary.com/dgkp7pkly/image/upload/c_crop,g_auto,h_800,w_800/EQUINTERIM/t011geg2exfmcuddre10.jpg"
              alt="cavalier"
            />

            <div className="py-2">
              <span>
                Concours <br />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};
export default Hero;
