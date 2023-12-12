"use client";

import React, { useEffect, useState } from "react";
import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "../../firebase";
import Chat from "/src/components/Chat";
// icons
import { PiEnvelopeThin } from "react-icons/pi";

import { FaMagnifyingGlass } from "react-icons/fa6";

import { PiNewspaperClippingLight } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";

const ChatMessage = () => {
	const messages = [
		{ text: "Hello!", sender: "user" },
		{ text: "Hi there!", sender: "bot" },
		// ... autres messages
	];
	return (
		<div className="flex flex-col h-screen bg-black-body m-auto mt-4">
			{/* Barre de navigation supérieure */}

			<div className="text-letter-orange ml-3 mb-3">
				<h1>Bienvenue Mimi, </h1>
			</div>
			<div className="bg-black-buttonshadow w-full p-2  flex items-center justify-between flex-row md:text-base md:hidden">
				{/* ... */}

				<nav className="flex items-center space-x-16 justify-around m-auto">
					<Link href="/ProfilPro">
						<div className="items-center space-x-4 text-letter-grey">
							<PiEnvelopeThin className="text-letter-orange mt-1 mr-2 w-5 h-5" />
						</div>{" "}
					</Link>
					<Link href="/ProfilPro">
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
					<Link href="/ProfilPro">
						<div className=" items-center space-x-4 text-letter-grey">
							<RiLogoutCircleRLine className="text-letter-orange mt-1 mr-2 w-5 h-5" />
						</div>
					</Link>
				</nav>
			</div>

			{/* Contenu principal */}
			<div className="flex-1 flex flex-wrap">
				{/* Barre latérale de navigation */}
				<div
					className="p-2 bg-black-button w-full md:w-60 flex-col md:flex hidden"
					id="sideNav"
				>
					<nav>
						<Link href="/ProfilPro">
							<div className="flex ml-2 mt-9">
								<div>
									<PiEnvelopeThin className="text-letter-orange mt-1 mr-2 w-5 h-5" />
								</div>
								<div>
									<ul className="flex items-center space-x-4 text-letter-grey">
										{" "}
										Message{" "}
									</ul>
								</div>
							</div>{" "}
						</Link>

						<Link href="/BeforeAnnonce">
							<div className="flex ml-2 mt-9">
								<div>
									<BsPersonWorkspace className="text-letter-orange mt-1 mr-2" />
								</div>
								<div>
									<ul className="flex items-center space-x-4 text-letter-grey">
										Déposer une annonce{" "}
									</ul>
								</div>
							</div>{" "}
						</Link>

						<Link href={"/ProfilPro"}>
							<div className="flex ml-2 mt-9">
								<div>
									<FaMagnifyingGlass className="text-letter-orange mt-1 mr-2" />
								</div>
								<div>
									<ul className="flex items-center space-x-4 text-letter-grey">
										{" "}
										Trouver un prestataire{" "}
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
										{" "}
										Suivre les candidatures{" "}
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

				{/* Zone de contenu principal */}
				<div className="flex-1 p-4 w-full ">
					{/* Champ de recherche */}

					<Chat messages={messages} />
				</div>
			</div>
		</div>
	);
};

export default ChatMessage;
