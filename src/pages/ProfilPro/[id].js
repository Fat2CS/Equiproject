"use client";
import React, { useEffect, useState } from "react";
import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { db, storage } from "../../firebase";

// icons
import { PiEnvelopeThin } from "react-icons/pi";

import { FaMagnifyingGlass } from "react-icons/fa6";

import { PiNewspaperClippingLight } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

const ProfilPro = ({ params }) => {
	const router = useRouter();
	const [userData, setUserData] = useState(null);
	const [userId, setUserId] = useState(null);
	const [uploadImage, setUploadImage] = useState(null);
	const [imageList, setImageList] = useState([]);
	const [profileImage, setProfileImage] = useState(null);
	const imageListRef = ref(storage, "images/");

	useEffect(() => {
		
		if (router.isReady) {
			const { id } = router.query;
			if (id !== undefined) {
				setUserId(id);
				listAll(imageListRef).then((response) => {
					response.items.forEach((image) => {
						const fileName = image._location.path_;
						const id_part = fileName.split("_");
						if (id_part[1] === id) {
													console.log(id_part[1], id);
							getDownloadURL(image).then((url) => {
								setProfileImage(url);
								//	console.log(url);
							});
						}
					});
				});
				fetchDataFromFirestore(id);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	
}, [router.isReady, router.query,profileImage,imageListRef,imageList]);

const handleImageUpload = () => {
	if (uploadImage == null) {
		alert("Please select an image to upload");
		return;
	}
	const imageRef = ref(storage, `images/${uploadImage.name + "_" + userId}`);
	uploadBytes(imageRef, uploadImage).then(() => {
		alert("Image uploaded");
	});
};

	async function fetchDataFromFirestore(userId) {
		try {
			
			const userDocRef = doc(db, "Professional", userId);

			// Obtient les données du document
			const userDocSnap = await getDoc(userDocRef);

			// Vérifie si le document existe
			if (userDocSnap.exists()) {
				const userData = userDocSnap.data();
				setUserData(userData);
			} else {
				// Gère le cas où le document n'existe pas
				console.error("Document not found");
			}
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	}

	if (!userData) {
		// Affiche un indicateur de chargement ou un message d'erreur si nécessaire
		return <div className="text-letter-grey">Loading...</div>;
	}

	return (
		<div className="flex flex-col h-screen bg-black-body">
			{/* Barre de navigation supérieure */}

			<div className="text-letter-orange">
				<h1>Bienvenue {userData.name}, </h1>
			</div>
			<div className="bg-black-buttonshadow w-full p-2  flex items-center justify-between flex-row md:text-base md:hidden">
				{/* ... */}
				<nav className="flex items-center space-x-16 justify-around m-auto">
					{/* <Link href={`/Message/{${id}`}>
            <div className="items-center space-x-4 text-letter-grey">
              <PiEnvelopeThin className="text-letter-orange mt-1 mr-2 w-5 h-5" />
            </div>{" "}
          </Link> */}
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
					<Link href={`/CreateAnnonce/{${userId}`}>
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
						<Link href={`/FreelancerMessage/ChatMessage/${userId}`}>
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
						<Link href={`/CreateAnnonce/{${userId}`}>
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

					{/* ... */}
				</div>

				{/* Zone de contenu principal */}
				<div className="flex-1 p-4 w-full ">
					{/* Champ de recherche */}
					<button
						onClick={handleImageUpload}
						style={{
							backgroundColor: "orange",
							color: "white",
							fontWeight: "bold",
							padding: "0.5rem",
							borderRadius: "0.2rem",
						}}
					>
						Upload Image
					</button>
					<input
						type="file"
						onChange={(event) => {
							setUploadImage(event.target.files[0]);
						}}
						style={{ padding: "0.2rem" }}
					/>

					<div className="md:relative md:w-1/3 ">
						{profileImage ? (
							<img src={profileImage} />
						) : (
							<div className="profil rounded-full picture w-40 h-40 bg-letter-orange m-auto  "></div>
						)}

						<div className="text-letter-grey text-center text-lg mt-4">
							<h1>{userData.name}</h1>
						</div>
					</div>

					{/* Conteneur de graphiques */}
					<div className=" mt-8 flex flex-col md:flex-row  space-x-0 space-y-2 md:space-x-4 md:space-y-0  ">
						{/* Premier conteneur - Graphe des utilisateurs */}
						<div className=" text-letter-grey w-full md:w-1/3 bg-black-button p-4 shadow rounded-lg border border-border-black-button">
							{userData.improved ? (
								<div className="w-5 h-5 bg-green rounded-full "></div>
							) : (
								<div className="w-5 h-5 bg-red rounded-full "></div>
							)}

							<div className="textfirstcontainer text-center mt-3">
								<h1 className="sm:text-base lg:text:oxl">{userData.name}</h1>

								<h2>{userData.business}</h2>
								<h2>{userData.postal}</h2>
							</div>
						</div>

						{/* Deuxième conteneur - Graphe des commerces */}
						<div className="w-full md:w-2/3 bg-black-button border border-border-black-button p-4 shadow rounded-lg  text-letter-grey text-center overflow-y-auto">
							<h1>Liste de vos annonces </h1>
							<h1>{userData.annonces}</h1>
						</div>
					</div>

					{/* Troisième conteneur - Tableau des autorisations en attente */}
					<div className=" h-40vh md:flex  md:space-x-10 md:text-center mt-8 bg-black-button border border-border-black-button p-4 shadow rounded-lg text-letter-grey m-auto ">
						<div className="mb-3 sm:text-base text-center md:mt-10">
							{" "}
							<h1>
								Trouvez votre prestataire et réalisez votre première mission sur
								Equintérim !{" "}
							</h1>
							<div className="mt-4">
								<span>
									{" "}
									Vous avez le choix entre déposer une annonce ou contacter le
									profil de votre choix.
								</span>
							</div>
						</div>

						<div className="mt-7">
							<div className="rounded-full h-20 w-20 bg-letter-orange m-auto"></div>
							<div className="text-letter-orange mt-2 text-center text-base">
								<span> Missions terminés </span>
								<div>
									<span className="text-letter-grey">0</span>
								</div>
							</div>
						</div>
						<div className="mt-7">
							<div className="rounded-full h-20 w-20 bg-letter-orange m-auto"></div>
							<div className="text-letter-orange mt-2 text-center text-base">
								<span> Note attribué </span>
								<div>
									<span className="text-letter-grey">0</span>
								</div>
							</div>
						</div>
						<div className="mt-7">
							<div className="rounded-full h-20 w-20 bg-letter-orange m-auto"></div>
							<div className="text-letter-orange mt-2 text-center text-base">
								<span> Prestataires engagés </span>
								<div>
									<span className="text-letter-grey">0</span>
								</div>
							</div>
						</div>
					</div>

					{/* Quatrième conteneur - Tableau des transactions */}
					<div className="mt-8 border border-border-black-button bg-black-button p-4 shadow rounded-lg"></div>
				</div>
			</div>
		</div>
	);
};

export default ProfilPro;
