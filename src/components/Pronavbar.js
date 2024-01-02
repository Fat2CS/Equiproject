"use client";

import React, { useEffect, useState } from "react";
import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "../firebase";

// icons
import { PiEnvelopeThin } from "react-icons/pi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";

const Pronavbar = ({login,receiverId}) => {
  const userData = {
    improved: false
  };

  return (
		<div className="">
			{/* Barre de navigation supérieure */}

			<div className="bg-black-buttonshadow w-full p-2  flex items-center justify-between flex-row md:text-base md:hidden">
				{/* ... */}

				<nav className="flex items-center space-x-16 justify-around m-auto">
					<Link href="/ProfilPro">
						<div className="items-center space-x-4 text-letter-grey">
							<PiEnvelopeThin className="text-letter-orange mt-1 mr-2 w-5 h-5" />
						</div>
					</Link>
					<Link href="/ProfilPro">
						<div className=" items-center space-x-4 text-letter-grey">
							<FaMagnifyingGlass className="text-letter-orange mt-1 mr-2 w-5 h-5" />
						</div>
					</Link>
					<Link href="/ProfilPro">
						<div className=" items-center space-x-4 text-letter-grey">
							<PiNewspaperClippingLight className="text-letter-orange mt-1 mr-2 w-5 h-5" />
						</div>
					</Link>
					<Link href="/ProfilPro">
						<div className=" items-center space-x-4 text-letter-grey">
							<BsPersonWorkspace className="text-letter-orange mt-1 mr-2 w-5 h-5" />
						</div>
					</Link>
					<Link href="/ProfilPro">
						<div className=" items-center space-x-4 text-letter-grey">
							<RiLogoutCircleRLine className="text-letter-orange mt-1 mr-2 w-5 h-5" />
						</div>
					</Link>
				</nav>
			</div>

			{/* Contenu principal */}

			{/* Barre latérale de navigation */}
			<div
				className="p-2 bg-black-button w-full md:w-60 flex-col md:flex hidden"
				id="sideNav"
			>
				<nav>
					<Link href={`/FreelancerMessage/ChatMessage/${receiverId}`}>
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
						</div>
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
						</div>
					</Link>

					<Link href="/ProfilPro">
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
						</div>
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
						</div>
					</Link>
					{login == undefined && (
						<Link href="/ProfilPro">
							<div className="flex ml-2 my-10">
								<div>
									<RiLogoutCircleRLine className="text-letter-orange mt-1 mr-2" />
								</div>

								<div>
									<ul className="flex items-center space-x-4 text-letter-grey">
										{" "}
								        Logout{" "}
									</ul>
								</div>
							</div>
						</Link>
					)}
				</nav>
			</div>
		</div>
	);
};

export default Pronavbar;
