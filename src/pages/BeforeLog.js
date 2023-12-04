"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";

// import {useNavigation} from 'next/navigation';
// import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRef } from "react";
import { auth, db } from "../firebase";

export default function BeforeLog() {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const type = "Professionnel";

  
  return (
    <div className="flex  min-h-full flex-1 flex-col  px-6 py-12 lg:px-20 lg:m-0 lg:flex-row ">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        
        <div className=" flex  mx-auto text-center w-1/2 lg:mx-0 lg:mr-8 lg:relative lg:right-8 "><Link href={"/"}>
         <Image
            width={100}
            height={100}
            sizes="20vw"
            src="https://res.cloudinary.com/dgkp7pkly/image/upload/v1700827173/EQUINTERIM/bvofggf7jwc5wptxilbn.png"
            alt="Your Company"
          />
        </Link>

        <div className="ml-8">
            <button
              type="submit"
              className="flex w-full justify-center rounded-full bg-letter-orange px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-letter-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-letter-orange-600"
            >
              Se connecter
            </button>
          </div>
         
        </div>

        <div>

        <div className=" px-2 textHero  top-11 md:px-0 mt-8 text-center md:text-start">
        <div className="text-letter-grey font-bold ">
          
        </div>
        <div>
          <div
            className="flex ml-2 m-6 
            "
          >
            <div className="squareorange bg-letter-orange text-letter-grey font-bold text-sm px-1 md:text-lg md:w-18 py-2 text-center md:text-start">
              Quelle
            </div>
            <div className=" squareblack bg-black-button bg-opacity-80 font-bold text-letter-grey rounded-e-2xl px-2 text-sm md:text-lg md:pr-20 py-2 ">
             est votre situation ?
            </div>
          </div>
         
        </div></div>
        </div>

        
          <div>
            
            <div className="mt-2">


                <button className=" text-left block w-full  border-2 border-border-black-button py-6 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button ">
                   <div><span>UN PROFESSIONNEL</span></div> 
                    <span>Je suis à la recherche dun prestataire </span>
                </button>

                <button className=" text-left mt-12 block w-full  border-2 border-border-black-button py-6 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button ">
                   <div><span>UN PRESTATIRE</span></div> 
                    <span>Je suis à la recherche dune mission </span>
                </button>
             
            </div>
          </div>

         

         
   
        ;
      </div>


    

      <div className="py-20  lg:ml-20 lg:mt-20  sm:w-full mx-auto mt-5 text-center lg:px-10  ">
          <Image className="rounded-full object-cover"
            width={517}
            height={517}
            sizes="50vw"
            src="https://res.cloudinary.com/dgkp7pkly/image/upload/v1700832878/EQUINTERIM/t3fd8t7psbvnmreezlib.png"
            alt="Your Company"
          />
        </div>
    </div>
  );
}
