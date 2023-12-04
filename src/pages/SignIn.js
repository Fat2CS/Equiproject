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

export default function SignIn() {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const type = "Professionnel";

  const handleSignIn = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = userCredential.user.uid;
      console.log("Compte créé avec succès. ID de l'utilisateur:", userId);
      // Créer un document pour l'utilisateur dans Firestore avec les propriétés initiales
      const docref=await addDoc(collection(db, "Professional"), {
        userId: userId,
        email: email,
        type: type
      });

      console.log("Document utilisateur créé avec succès."+docref.id);
      router.push(`./ProfilCreate/${docref.id}`);
    } catch (error) {
      // Gérer les erreurs d'inscription
      console.error("Error during signup:", error.message);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col  px-6 py-8 lg:px-20 lg:m-0 lg:flex-row ">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        <div className=" mx-auto text-center w-1/2 lg:mx-0 lg:mr-8 lg:relative lg:right-8 ">
          <Link href={"/"}>
            <Image
              width={100}
              height={100}
              sizes="20vw"
              src="https://res.cloudinary.com/dgkp7pkly/image/upload/v1700827173/EQUINTERIM/bvofggf7jwc5wptxilbn.png"
              alt="Your Company"
            />
          </Link>
        </div>
        <div>
          <div className=" px-2 textHero  top-11 md:px-0 mt-8 text-center md:text-start">
            <div className="text-letter-grey font-bold "></div>
            <div>
              <div
                className="flex ml-2 m-6 
            "
              >
                <div className="squareorange bg-letter-orange text-letter-grey font-bold text-sm px-1 md:text-lg md:w-18 py-2 text-center md:text-start">
                  Renseignez
                </div>
                <div className=" squareblack bg-black-button bg-opacity-80 font-bold text-letter-grey rounded-e-2xl px-2 text-sm md:text-lg md:pr-20 py-2 ">
                  vos informations
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
          </div>
        </div>
        <form onSubmit={handleSignIn} className="space-y-6 lg:ml-4 mt-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-letter-grey"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                ref={emailRef}
                className=" block w-full rounded-full border  py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button "
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-letter-grey"
              >
                Password
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                ref={passwordRef}
                autoComplete="current-password"
                required
                className=" block w-full rounded-full border  py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button "
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-letter-grey"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  ref={confirmPasswordRef}
                  autoComplete="current-password"
                  required
                  className=" block w-full rounded-full border  py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button "
                />
              </div>
            </div>

            <div className="flex items-start mb-6 mt-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className=" w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className=" ms-2 text-sm font-medium text-letter-grey dark:text-gray-300"
              >
                Jaccepte{" "}
                <a
                  href="#"
                  className="text-letter-orange hover:underline dark:letter-orange"
                >
                  les conditions générales de vente
                </a>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-full bg-letter-orange px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-letter-orange-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-letter-orange-600"
            >
              Inscription
            </button>
          </div>
        </form>
        ;
      </div>

      <div className="py-20 lg:ml-20 lg:mt-20 sm:w-full mx-auto mt-5 text-center lg:px-10  ">
        <Image
          className=" lg:mt-20 rounded-full object-cover"
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
