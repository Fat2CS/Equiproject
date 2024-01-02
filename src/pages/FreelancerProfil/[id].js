/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import {
	getDoc,
	doc,
	getDocs,
	collection,
	updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { db, storage, auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
// icons
import { PiEnvelopeThin } from "react-icons/pi";

import { FaMagnifyingGlass } from "react-icons/fa6";

import { PiNewspaperClippingLight } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";

import { FaPencil } from "react-icons/fa6";

const FreelancerProfil = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [userId, setUserId] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [profileImage, setProfileImage] = useState(null);

  const imageListRef = ref(storage, "images/");

	useEffect(() => {
		// Check if router is ready
		if (router.isReady) {
			const { id } = router.query;
			if (id !== undefined) {
				setUserId(id);
				listAll(imageListRef).then((response) => {
					response.items.forEach((image) => {
						const fileName = image._location.path_;
						const id_part = fileName.split("_");
						if (id_part[1] === id) {
							getDownloadURL(image).then((url) => {
								setProfileImage(url);
							});
						}
					});
				});
				fetchDataFromFirestore(id);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.isReady, router.query, profileImage]);

  async function fetchDataFromFirestore(userId) {
    try {
      // Obtient la référence du document pour l'utilisateur
      const userDocRef = doc(db, "Freelancer", userId);

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

	const handleSignout = async () => {
		try {
			await signOut(auth); // Use signOut(auth) instead of signOut()
			localStorage.removeItem("senderID");
			router.push("/FreelancerSign"); // Replace '/FreelancerSign' with the route you want to navigate to after sign-out
		} catch (error) {
			console.error("Error signing out:", error.message);
			// Handle sign-out error if needed
		}
	};

	const handleStatusChange = async () => {
		try {
			const docRef = doc(db, "Freelancer", userId);
			await updateDoc(docRef, {
				status: !userData.status,
			});

			// Update local state after changing the status
			setUserData((prevUserData) => ({
				...prevUserData,
				status: !prevUserData.status,
			}));
		} catch (error) {
			console.error("Error updating status:", error);
			// Handle the error (e.g., display a message to the user)
		}
	};
	return (
		<div className="flex flex-col h-screen bg-black-body">
			{/* Barre de navigation supérieure */}

      <div className="text-letter-orange">
        <h1>Bienvenue userData.name, </h1>
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
          <Link href={"/CreateAnnonce/"}>
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
						<Link href={`/FreelancerMessage/ListMessage/${userId}`}>
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
										Trouver une mission{" "}
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
										Suivre mes candidatures{" "}
									</ul>
								</div>
							</div>{" "}
						</Link>
						<div className="flex ml-2 my-10">
							<button
								onClick={() => {
									handleSignout(userId);
								}}
							>
								<div>
									<RiLogoutCircleRLine className="text-letter-orange mt-1 mr-2" />
								</div>

								<div>
									<ul className="flex items-center space-x-4 text-letter-grey">
										{" "}
										Logout{" "}
									</ul>
								</div>
							</button>
						</div>{" "}
					</nav>

					{/* ... */}
				</div>
				<div></div>
				{/* Zone de contenu principal */}
				<div className="flex-1 p-4 w-full ">
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
					{/* Champ de recherche */}
					<div className="md:relative md:w-1/3 py-15 ">
						{profileImage != null ? (
							<img src={profileImage} />
						) : (
							<div className="profil rounded-full picture w-40 h-40 bg-letter-orange m-auto  "></div>
						)}

						<div className="text-letter-grey text-center text-lg mt-4">
							<h1>{userData.name}</h1>
							<button
								onClick={handleStatusChange}
								className="bg-orange text-white font-bold py-1 px-2 rounded-md"
							>
								Change Status
							</button>
							<div className="mr-8 flex justify-center">
								{userData.status ? (
									<div className="mt-3 w-5 h-5 bg-green rounded-full">
										<span className="ml-6 mt-1">Available</span>
									</div>
								) : (
									<div className="flex items-center">
										<div className="w-3 h-3 bg-red rounded-full"></div>
										<span className="ml-2 text-red">Not Available</span>
									</div>
								)}
							</div>
						</div>
					</div>

          {/* Conteneur de graphiques */}
          <div className=" mt-8 flex flex-col md:flex-row  space-x-0 space-y-2 md:space-x-4 md:space-y-0  ">
            {/* Premier conteneur - Graphe des utilisateurs */}
            <div className=" text-letter-grey w-full md:w-1/3 bg-black-button p-4 shadow rounded-lg border border-border-black-button">
              <div className="textfirstcontainer  mt-3">
                <h1 className="sm:text-base lg:text:oxl mb-3">
                  {userData.name}
                </h1>

                <h2 className="mb-3">userData.business</h2>
                <h2 className="mb-3">userData.postal</h2>
              </div>
              <span className="mb-3">Description</span>
              <span>{userData.description}</span>
            </div>

            {/* Deuxième conteneur - Graphe des commerces */}
            <div className="w-full md:w-2/3">
              <span
                className=" text-lg font-bold text-letter-grey border-b-2 border-border-black-button
                    mt-8 mb-4
                    "
              >
                {" "}
                Description
              </span>
              <div className=" bg-black-button border border-border-black-button p-4 shadow rounded-lg  text-letter-grey overflow-y-auto relative mt-5">
                <div className="flex justify-end">
                  <FaPencil className="text-letter-orange mt-1 mr-2" />
                </div>
                <h1>Description </h1>
                <h1>userData.description</h1>
                <span>Décris toi en quelques mots </span>
                <h1>Expériences </h1>
                <h1>userData.level</h1>
                <span></span>
              </div>

              <div className="mt-5">
                <span
                  className=" text-lg font-bold text-letter-grey border-b-2 border-border-black-button
                     mb-4
                    "
                >
                  {" "}
                  Éxpériences
                </span>
              </div>

              <div className="w-full  mt-5  bg-black-button border border-border-black-button p-4 shadow rounded-lg  text-letter-grey overflow-y-auto">
                <div className="flex justify-end">
                  <FaPencil className="text-letter-orange mt-1 mr-2" />
                </div>
                <h1>Expériences </h1>
                <h1>userData.level</h1>
                <span>Décris toi en quelques mots </span>
              </div>
            </div>
          </div>

          {/* Troisième conteneur - Tableau des autorisations en attente */}

          <div className="mt-5">
            <span
              className=" text-lg font-bold text-letter-grey border-b-2 border-border-black-button
                     mb-4
                    "
            >
              {" "}
              Candidatures
            </span>
          </div>
          <div className=" h-40vh md:flex  md:space-x-10 md:text-center mt-5 bg-black-button border border-border-black-button p-4 shadow rounded-lg text-letter-grey m-auto ">
            <div className=" sm:text-basemd:mt-5">
              {" "}
              <h1>Candidatures </h1>
              <div className="mt-4">
                <span> J'ai candidaté pour le poste de groom</span>
              </div>
            </div>

            <div className="mt-7">
              <div className="text-letter-orange mt-2 text-center text-base">
                <div>
                  <span className="text-letter-grey">date</span>
                </div>
              </div>
            </div>

            <div className="mt-9">
              <div>
                <span className="text-letter-grey">lieu</span>
              </div>
            </div>
          </div>

          {/* Quatrième conteneur - Tableau des transactions */}
          <div className="mt-5">
            <span
              className=" text-lg font-bold text-letter-grey border-b-2 border-border-black-button
                     mb-4
                    "
            >
              {" "}
              Avis
            </span>
          </div>

          <div className="mt-8 border border-border-black-button bg-black-button p-4 shadow rounded-lg text-letter-grey">
            <span>Avis </span>
            <div>
              <span>Merci pour ton ravaille groom soigneuse et sérieuse</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfil;
