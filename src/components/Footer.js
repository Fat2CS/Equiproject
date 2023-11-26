"use client";

import Image from "next/image";
import Insta from "public/image/instagram.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" ">
      <hr className="my-6 sm:mx-auto border-letter-grey border lg:my-8" />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8  lg:ml-10">
        <div className=" md:flex md:justify-center">
          <div className="md:w-1/4  mb-8 md:mb-0 sm:max-w-full ml-10 sm:ml-4">
            <a
              href="https://"
              className="sm:flex sm:items-center sm:justify-center md:justify-start "
            >
              <Image
                src="https://res.cloudinary.com/dgkp7pkly/image/upload/v1700827173/EQUINTERIM/bvofggf7jwc5wptxilbn.png"
                alt="equiterim Logo"
                className=" "
                width={100}
                height={100}
              />
            </a>

            <div className=" py-5 text-gray-500  dark:hover:text-white">
              <span> Nous contacter</span>
             

              <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0 md:justify-start">
                <a href="#" className="text-gray-900 hover:text-white">
                  <div>
                    <FaFacebook className="w-5 h-5 bg-letter-orange" />{" "}
                  </div>
                </a>

                <a href="#" className="">
                  <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-900 hover:text-white">
                  <FaInstagramSquare className="w-5 h-5 bg-letter-orange" />
                  <span className="sr-only">Instagram page</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-5 lg:grid-cols-3 justify-items-center items-center ">
            <div className="lg:mx-10 px-5 ">
              <h2 className="mb-5 text-sm font-semibold text-letter-orange uppercase">
                Pour les écuries
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Comment ça marche?
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Trouvez les meilleurs prestataires
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:px-12 lg:ml-11 lg:mx-7 ">
              <h2 className="mb-6 text-sm font-semibold text-letter-orange uppercase ">
               Pour les Prestataires
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                   Comment ça marche?
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                   Prestataire par catégories
                  </a>
                </li>
              </ul>
            </div>
            <div className=" ml-5 lg:pl lg:ml-15 lg:mx-10">
              <h2 className="mb-6 text-sm font-semibold text-letter-orange uppercase">
               EQUITERIM
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    A propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    CGU & CGV
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                   Protection des données
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023
            <a href="https://flowbite.com/" className="hover:underline">
              Equinterim™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
