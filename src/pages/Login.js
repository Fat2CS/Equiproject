"use client";

import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
import { auth } from "../firebase";
import Image from "next/image";
import Link from "next/link";
import { useFirebase } from "../firebase";
import { useRouter } from "next/router";

function Login() {
	const lEmailRef = useRef();
	const lPasswordRef = useRef();
	const firebase = useFirebase();
	const router = useRouter();

	const Login = (e) => {
		e.preventDefault();
		const email = lEmailRef.current.value;
		const password = lPasswordRef.current.value;

		try {
			firebase
				.signInWithEmailAndPassword(firebase.auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
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
			console.log("Login in Issue");
		}
	};

	return (
		<div className="flex min-h-full flex-1 flex-col  px-6 py-12 lg:px-2 lg:flex-row">
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
				<form onSubmit={Login} className="space-y-6 lg:ml-4">
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
								ref={lEmailRef}
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
							<div className="text-sm">
								<a
									href="#"
									className="font-semibold text-letter-orange
                   hover:text-letter-orange-500"
								>
									mot de passe oublié ?
								</a>
							</div>
						</div>
						<div className="mt-2">
							<input
								id="password"
								name="password"
								type="password"
								ref={lPasswordRef}
								autoComplete="current-password"
								required
								className="block w-full rounded-full border-0 py-3.5  px-2 text-grey shadow-sm ring-1 ring-inset ring-letter-grey-300 placeholder-letter-grey focus:ring-2 focus:ring-inset focus:ring-letter-orange-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-full bg-letter-orange px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-letter-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-letter-orange-600"
						>
							Me connecter
						</button>
					</div>
				</form>
				;
			</div>

			<div className="mt-10 lg:py-20 sm:mx-auto sm:w-full sm:max-w-sm">
				<div className="mx-auto text-center w-full">
					<Image
						className="rounded-full object-cover"
						width={617}
						height={617}
						sizes="20vw"
						src="https://res.cloudinary.com/dgkp7pkly/image/upload/v1700833526/EQUINTERIM/f1pt5zoy0tu2t8hxwlyj.png"
						alt="Your Company"
					/>
				</div>
			</div>
		</div>
	);
}
export default Login;
