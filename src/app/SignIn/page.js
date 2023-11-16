"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { addDoc, collection } from "firebase/firestore";

// import {useNavigation} from 'next/navigation';
// import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRef } from "react";
import { auth, db } from "../../firebase";

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
      await addDoc(collection(db, "User"), {
        userId: userId,
        email: email,
        type: type
        // ... Autres propriétés initiales ...
      });

      console.log("Document utilisateur créé avec succès.");
      router.push(`/ProfilCreate?id=${userId}`);
    } catch (error) {
      // Gérer les erreurs d'inscription
      console.error("Error during signup:", error.message);
    }
  };

  // const router = useRouter();
  // export default function Signin() {

  // const emailRef = useRef();
  // const passwordRef = useRef();

  // const SignIn = (e)=> {
  // e.preventDefault();
  // const email = emailRef.current.value;
  // const password = passwordRef.current.value
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed up
  //     const user = userCredential.user;
  //     alert("vous êtes connecté");
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     alert(errorMessage);
  //     // ..
  //   });
  // }

  return (
    <div className="flex min-h-full flex-1 flex-col  px-6 py-12 lg:px-2 lg:flex-row">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        <div className=" mx-auto text-center w-1/2 lg:mx-0 lg:mr-8 lg:relative lg:right-8 ">
          <Image
            width={217}
            height={217}
            sizes="20vw"
            src="https://res.cloudinary.com/dgkp7pkly/image/upload/v1699865791/EQUINTERIM/eliunvkjpis02zzppvwo.png"
            alt="Your Company"
          />
        </div>
        <form onSubmit={handleSignIn} className="space-y-6 lg:ml-4">
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
                // className=" block w-full rounded-md border-0 py-1.5 letter-grey  bg-black ring-1 ring-inset ring-gray-300 placeholder:bg-black focus:ring-2 focus:ring-inset focus:ring-letter-orange sm:text-sm sm:leading-6"
                className="  block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button "
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
                className="block w-full rounded-full border-0 py-3.5  px-2 text-letter-grey shadow-sm ring-1 ring-inset ring-letter-grey-300 placeholder-letter-grey focus:ring-2 focus:ring-inset focus:ring-letter-orange-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
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
                  className="block w-full rounded-full border-0 py-3.5  px-2 text-letter-grey shadow-sm ring-1 ring-inset ring-letter-grey-300 placeholder-letter-grey focus:ring-2 focus:ring-inset focus:ring-letter-orange-600 sm:text-sm sm:leading-6"
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
                J'accepte{" "}
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
              className="flex w-full justify-center rounded-full bg-letter-orange px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-letter-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-letter-orange-600"
            >
              Inscription
            </button>
          </div>
        </form>
        ;
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="mx-auto text-center w-1/2">
          <Image
            width={217}
            height={217}
            sizes="20vw"
            src="https://res.cloudinary.com/dgkp7pkly/image/upload/v1699865791/EQUINTERIM/eliunvkjpis02zzppvwo.png"
            alt="Your Company"
          />
        </div>
      </div>
    </div>
  );
}
