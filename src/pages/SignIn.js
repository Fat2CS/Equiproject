import { useRouter } from "next/router";
import Image from "next/image";
import { useRef } from "react";
import { useFirebase } from "@/firebase";
import NextImage from "next/image";
import { addDoc, collection } from "firebase/firestore";

export default function SignIn() {
	const router = useRouter();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();
	const type = "Professionnel";
	const firebase = useFirebase();

	const handleSignIn = async (e) => {
		e.preventDefault();

		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const confirmPassword = confirmPasswordRef.current.value;

		if (password !== confirmPassword) {
			alert("Les mots de passe ne correspondent pas.");
			return;
		}

<<<<<<< HEAD
   try {
        firebase
					.createUserWithEmailAndPassword(firebase.auth, email, password)
					.then((userCredential) => {
						const user = userCredential.user;
						localStorage.setItem("user_id", user.uid);
						router.push({
							pathname: "/",
							query: { userId: user.uid },
						});
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
						alert(`Firebase Error: ${errorCode} - ${errorMessage}`);
					});

      } catch (err) {
        alert("Sign in error");
      }
	};
=======
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
>>>>>>> 67efd49284c0532fc2c5e095fcc59065e05425c4

	return (
		<div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-2 lg:flex-row">
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<div className="mx-auto text-center w-1/2 lg:mx-0 lg:mr-8 lg:relative lg:right-8">
					<NextImage
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
								className="block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey focus:ring-letter-orange-600 focus:bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button"
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
								className="block w-full rounded-full border-0 py-3.5 px-2 text-letter-grey shadow-sm ring-1 ring-inset ring-letter-grey-300 placeholder-letter-grey focus:ring-2 focus:ring-inset focus:ring-letter-orange-600 sm:text-sm sm:leading-6"
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
									className="block w-full rounded-full border-0 py-3.5 px-2 text-letter-grey shadow-sm ring-1 ring-inset ring-letter-grey-300 placeholder-letter-grey focus:ring-2 focus:ring-inset focus:ring-letter-orange-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

<<<<<<< HEAD
						<div className="flex items-start mb-6 mt-6">
							<div className="flex items-center h-5">
								<input
									id="remember"
									type="checkbox"
									value=""
									className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
									required
								/>
							</div>
							<label
								htmlFor="remember"
								className="ms-2 text-sm font-medium text-letter-grey dark:text-gray-300"
							>
								accepte{" "}
								<a
									href="#"
									className="text-letter-orange hover:underline dark:letter-orange"
								>
									les conditions générales de vente
								</a>
							</label>
						</div>
					</div>
=======
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
>>>>>>> 67efd49284c0532fc2c5e095fcc59065e05425c4

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-full bg-letter-orange px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-letter-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-letter-orange-600"
						>
							Inscription
						</button>
					</div>
				</form>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<div className="mx-auto text-center w-1/2">
					<NextImage
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
