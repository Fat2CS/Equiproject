"use client"

import Image from "next/image";
import Insta from "public/image/instagram.svg"; 
const Footer = () => {
  return (
    <footer className=" ">
      <hr className="my-6 sm:mx-auto border-letter-grey border lg:my-8" />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 lg:mr-2 lg:mt-20">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                alt="FlowBite Logo"
                className="h-8 mr-3"
                width={32}
                height={32}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-letter-orange">
                EQUIINERIM
              </span>
            </a>
            <div className="text-center py-5 text-letter-grey">
              {" "}
              <span> Nous contacter</span>
            </div>

            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <div>

                    <Insta className="w-35 h-55 bg-letter-orange"/>
                </div>
              
             <Image src={Insta} alt="" style="color:black" width={23} height={1} />
                

             <span className="sr-only">Instagram page</span>
           
              </a>

              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >


                <svg
                
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 64c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm0 113c23.6 0 43 19.4 43 43s-19.4 43-43 43-43-19.4-43-43 19.4-43 43-43zm0 153c62.4 0 113-50.6 113-113S286.4 64 224 64 111 114.6 111 177 161.6 290 224 290zm184 44c0 14.6-11.8 26.5-26.5 26.5H71.5C56.8 361 45 349.1 45 333.5V178.5C45 162.8 56.8 151 71.5 151h335C356.2 151 368 162.8 368 178.5v154.9z" />
                </svg>

                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>

              {/* ... Ajoutez des liens pour les autres réseaux sociaux */}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-3 ">
            <div className="lg:mx-20 px-5" >
              <h2 className="mb-6 text-sm font-semibold text-letter-orange uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:px-14 lg:ml-11 lg:mx-7 ">
              <h2 className="mb-6 text-sm font-semibold text-letter-orange uppercase ">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:pl lg:ml-15 lg:mx-10">
              <h2 className="mb-6 text-sm font-semibold text-letter-orange uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
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
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
