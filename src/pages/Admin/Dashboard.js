/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { PiEnvelopeThin } from "react-icons/pi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";
import {
	doc,
	setDoc,
	getDocs,
	addDoc,
	collection,
	deleteDoc,
	updateDoc,
	getDoc,
	query,
	where,
} from "firebase/firestore";
import { db, auth } from "@/firebase";
import { root } from "postcss";
import { useRouter } from "next/router";
const Dashboard =  () => {
	const [listAnnouces, setListAnnouces] = useState([]);

	const [listProfil, setListProfil] = useState([]);

	const [annoucementsCounter, setAnnoucementCounter] = useState(0);
	const [freelancerCounter, setFreelancerCounter] = useState(0);
	const router = useRouter();

	useEffect(() => {
		const authenticate = async () => {
			let user_token = localStorage.getItem("token");
			const adminDocRef = doc(db, "Admin", "vdWkeg9vQlg5BITe3598");
			const docSnapshot = await getDoc(adminDocRef);
			if (docSnapshot.exists()) {
				const adminData = docSnapshot.data();
				adminData.token !== user_token
					? router.push("/Admin/AdminLogin")
					: localStorage.removeItem("token");
			}
		};

		const fetchData = async () => {
			try {
				await fetchAllCounters();
				await fetchAllFreelancer();
				await fetchAllAnnouces();
			} catch (error) {
				console.error("Error fetching freelancer data:", error);
			}
		};
		authenticate();
		fetchData();
	}, []);

	async function fetchAllCounters() {
		try {
			const querySnapshot = await getDocs(collection(db, "validationCounter"));

			if (!querySnapshot.empty) {
				const firstDoc = querySnapshot.docs[0];

				if (firstDoc) {
					const data = firstDoc.data();
					console.log(data);

					setAnnoucementCounter(data.annouces);
					setFreelancerCounter(data.freelancer);
				}
			} else {
				console.error("No documents found in the Counter collection");
			}
		} catch (error) {
			console.error("Error fetching user data:", error);
			throw error;
		}
	}

	async function fetchAllFreelancer() {
		try {
			const querySnapshot = await getDocs(collection(db, "FreelancerRequest"));

			if (!querySnapshot.empty) {
				const allDocs = [];

				querySnapshot.forEach((doc) => {
					const documentData = doc.data();
					allDocs.push({ id: doc.id, data: documentData });
				});

				setListProfil(allDocs);
			} else {
				console.error("No documents found in the collection");
			}
		} catch (error) {
			console.error("Error fetching user data:", error);

			throw error;
		}
	}

	async function fetchAllAnnouces() {
		try {
			const querySnapshot = await getDocs(collection(db, "AnnoucesRequest"));

			if (!querySnapshot.empty) {
				const allDocs = [];

				querySnapshot.forEach((doc) => {
					const documentData = doc.data();
					allDocs.push({ id: doc.id, data: documentData });
				});

				setListAnnouces(allDocs);
				console.log(allDocs);
			} else {
				console.error("No documents found in the collection");
			}
		} catch (error) {
			console.error("Error fetching user data:", error);

			throw error;
		}
	}

	const handleApproveFreelancer = async (
		userId,
		name,
		email,
		level,
		skill,
		description
	) => {
		try {
			await setDoc(doc(db, "Freelancer", userId), {
				userId: userId,
				email: email,
				type: "Freelancer",
				name: name,
				skill: skill,
				description: description,
				level: level,
			});

			const validationCounterRef = collection(db, "validationCounter");

			const querySnapshot = await getDocs(validationCounterRef);

			if (!querySnapshot.empty) {
				const docSnapshot = querySnapshot.docs[0];
				const documentId = docSnapshot.id;

				const { freelancer, annouces } = docSnapshot.data();

				const newFreelancerValue = freelancer + 1;

				const newAnnouncesValue = annouces;

				await updateDoc(doc(db, "validationCounter", documentId), {
					freelancer: newFreelancerValue,
					annouces: newAnnouncesValue,
				});
				updateCounters();
				console.log("Attributes updated successfully!");
			} else {
				console.error("No documents found in the collection");
			}

			const documentRef = doc(db, "FreelancerRequest", userId);
			await deleteDoc(documentRef);

			setListProfil((prevList) =>
				prevList.filter((obj) => obj.data.userId !== userId)
			);
		} catch (error) {
			console.log("Error approving the freelancer:", error);
		}
	};

	const updateCounters = async () => {
		try {
			const validationCounterRef = collection(db, "validationCounter");
			const querySnapshot = await getDocs(validationCounterRef);

			if (!querySnapshot.empty) {
				const docSnapshot = querySnapshot.docs[0];
				const { freelancer, annouces } = docSnapshot.data();

				setAnnoucementCounter(annouces);
				setFreelancerCounter(freelancer);
			} else {
				console.error("No documents found in the validationCounter collection");
			}
		} catch (error) {
			console.error("Error updating counters:", error);
		}
	};

	const handleDisapproveFreelancer = async (userId) => {
		try {
			const documentRef = doc(db, "FreelancerRequest", userId);
			await deleteDoc(documentRef);

			setListProfil((prevList) =>
				prevList.filter((obj) => obj.data.userId !== userId)
			);
		} catch {
			console.log("Error Disapproving the freelancer:", error);
		}
	};

	const handleApproveAnnouces = async (
		userId,
		category,
		subCategory,
		duration,
		budget,
		description
	) => {
		try {
			await addDoc(collection(db, "Annouces"), {
				userId: userId,
				category: category,
				subCategory: subCategory,
				duration: duration,
				budget: budget,
				description: description,
			});

			const validationCounterRef = collection(db, "validationCounter");
			const querySnapshot = await getDocs(validationCounterRef);

			if (!querySnapshot.empty) {
				const docSnapshot = querySnapshot.docs[0];
				const documentId = docSnapshot.id;

				const { freelancer, annouces } = docSnapshot.data();

				const newAnnouncesValue = annouces + 1;

				await updateDoc(doc(db, "validationCounter", documentId), {
					annouces: newAnnouncesValue,
				});

				updateCounters();
				console.log("Attributes updated successfully!");
			} else {
				console.error("No documents found in the collection");
			}

			const annoucesRequestRef = collection(db, "AnnoucesRequest");
			const q = queryByUserId(annoucesRequestRef, userId);
			const querySnapshotToDelete = await getDocs(q);

			if (!querySnapshotToDelete.empty) {
				querySnapshotToDelete.forEach(async (doc) => {
					await deleteDoc(doc.ref);
				});

				setListAnnouces((prevList) =>
					prevList.filter((obj) => obj.data.userId !== userId)
				);
			}
		} catch (error) {
			console.log("Error approving the annouces:", error);
		}
	};

	const handleDisapproveAnnouces = async (userId) => {
		try {
			const annoucesRequestRef = collection(db, "AnnoucesRequest");
			const q = queryByUserId(annoucesRequestRef, userId);
			const querySnapshotToDelete = await getDocs(q);

			if (!querySnapshotToDelete.empty) {
				querySnapshotToDelete.forEach(async (doc) => {
					await deleteDoc(doc.ref);
				});

				setListAnnouces((prevList) =>
					prevList.filter((obj) => obj.data.userId !== userId)
				);
			}
		} catch {
			console.log("Error Disapproving the Annouce:", error);
		}
	};

	// Helper function to query documents by userId
	const queryByUserId = (collectionRef, userId) => {
		return query(collectionRef, where("userId", "==", userId));
	};

	const handleScrollToBottom = () => {
		const element = document.querySelector(".overflow-y-auto");
		if (element) {
			element.scrollTop = element.scrollHeight;
		}
	};

	return (
		<div className="flex">
			<div className="bg-black-buttonshadow w-full p-2  flex items-center justify-between flex-row md:text-base md:hidden">
				{/* ... */}
				<nav className="flex items-center space-x-16 justify-around m-auto">
					{/* <Link href={`/Message/{${id}`}>
    <div className="items-center space-x-4 text-letter-grey">
      <PiEnvelopeThin className="text-letter-orange mt-1 mr-2 w-5 h-5" />
    </div>{" "}
  </Link> */}

					<Link href="/FindMission">
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
			<div
				className="p-2 bg-black-button w-full md:w-60 flex-col md:flex hidden"
				id="sideNav"
			>
				<nav>
					<Link href={""}>
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
					<Link href={"/FindMission"}>
						<div className="flex ml-2 mt-9">
							<div>
								<FaMagnifyingGlass className="text-letter-orange mt-1 mr-2" />
							</div>
							<div>
								<ul className="flex items-center space-x-4 text-letter-grey">
									{" "}
									Profil à valider{" "}
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
									Abnonce à valider
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
			;
			<div className="w-full">
				{/* <div className="mt-8 flex flex-wrap  w-full"> */}
				<div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0 w-full">
					{/* Premier conteneur */}
					{/* Section 1 - Graphe des utilisateurs */}
					<div className="flex-1 bg-black-body p-4 shadow rounded-lg md:w-1/2">
						<div className="profil rounded-full picture w-40 h-40 bg-letter-orange m-auto text-xl flex items-center justify-center text-letter-grey mb-5 ">
							{annoucementsCounter}
						</div>
						<h2 className="text-letter-grey text-lg font-semibold pb-1 text-center">
							Announces Validated
						</h2>
						<div className="my-1"></div> {/* Espace de séparation */}
						<div className="bg-letter-orange h-px mb-6"></div>{" "}
						{/* Ligne avec dégradé */}
					</div>

					{/* Deuxième conteneur */}
					{/* Section 2 - Graphe des commerces */}
					<div className="flex-1 bg-black-body p-4 shadow rounded-lg items-center">
						<div className="profil rounded-full picture w-40 h-40 bg-letter-orange m-auto text-xl flex items-center justify-center text-letter-grey mb-5 ">
							{freelancerCounter}
						</div>
						<h2 className="text-letter-grey text-lg font-semibold pb-1 text-center ">
							Profile Validated
						</h2>
						<div className="rounded-full bg-letter-orange h-15 w-15"></div>{" "}
						{/* Espace de séparation */}
						<div className="bg-letter-orange  h-px mb-6"></div>{" "}
						{/* Ligne avec dégradé */}
					</div>
				</div>
				{/* Troisième conteneur en dessous des deux précédents */}
				{/* Section 3 - Tableau des autorisations en attente */}
				<div className="mt-8 bg-white p-4 shadow rounded-lg">
					<h2 className="text-gray-500 text-lg font-semibold pb-4">
						Annonce à valider
					</h2>
					<div className="my-1"></div> {/* Espace de séparation */}
					<div className="bg-letter-orange h-px mb-6"></div>{" "}
					{/* Ligne avec dégradé */}
					<div className="overflow-y-auto h-32">
						<table className="w-full table-auto text-sm">
							<thead>
								<tr>
									<th className="px-4 py-2">Category</th>
									<th className="px-4 py-2">Sub category</th>
									<th className="px-4 py-2">Duration</th>
									<th className="px-4 py-2">Budget</th>
									<th className="px-4 py-2">Description</th>
									<th className="px-4 py-2">Action</th>
								</tr>
							</thead>
							<tbody className="text-center">
								{listAnnouces.map(({ data }, index) => (
									<tr
										key={index}
										className={index % 2 === 0 ? "bg-gray-100" : ""}
									>
										<td className=" px-4 py-2">{data.category}</td>
										<td className=" px-4 py-2">{data.subCategory}</td>
										<td className=" px-4 py-2">{data.duration}</td>
										<td className=" px-4 py-2">{data.budget}</td>
										<td className=" px-4 py-2">{data.description}</td>
										<td className="px-4 py-2">
											<div className="flex justify-between">
												<button
													className="border border-gray-400 py-1 px-1 rounded-md bg-green-500 mr-1"
													onClick={() => {
														handleApproveAnnouces(
															data.userId,
															data.category,
															data.subCategory,
															data.duration,
															data.budget,
															data.description
														);
													}}
												>
													Approve
												</button>
												<button
													className="border border-gray-400 py-1 px-1 rounded-md bg-red-500"
													onClick={() => {
														handleDisapproveAnnouces(data.userId);
													}}
												>
													Disapprove
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					{/* Bouton "See More" pour le tableau des autorisations en attente */}
					<div className="text-right mt-4">
						<button
							className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded"
							onClick={handleScrollToBottom}
						>
							See More
						</button>
					</div>
				</div>
				{/* Quatrième conteneur */}
				{/* Section 4 - Tableau des transactions */}

				<div className="mt-8 bg-white p-4 shadow rounded-lg">
					<h2 className="text-gray-500 text-lg font-semibold pb-4">
						Freelancer Profile Validation
					</h2>
					<div className="my-1"></div>
					<div className="bg-letter-orange h-px mb-6"></div>{" "}
					<div className="overflow-y-auto h-32">
						<table className="w-full table-auto text-sm">
							<thead>
								<tr>
									<th className="px-4 py-2">Name</th>
									<th className="px-4 py-2">Email</th>
									<th className="px-4 py-2">Level of expérience</th>
									<th className="px-4 py-2">Skills</th>

									<th className="px-4 py-2">Description</th>
									<th className="px-4 py-2">Action</th>
								</tr>
							</thead>
							<tbody className="text-center">
								{listProfil.map(({ data }, index) => (
									<tr
										key={index}
										className={index % 2 === 0 ? "bg-gray-100" : ""}
									>
										<td className=" px-4 py-2">{data.name}</td>
										<td className=" px-4 py-2">{data.email}</td>
										<td className=" px-4 py-2">{data.level}</td>
										<td className=" px-4 py-2">{data.skill}</td>
										<td className=" px-4 py-2">{data.description}</td>
										<td className="px-4 py-2">
											<div className="flex justify-between">
												<button
													className="border border-gray-400 py-1 px-1 rounded-md bg-green-500 mr-1"
													onClick={() => {
														handleApproveFreelancer(
															data.userId,
															data.name,
															data.email,
															data.level,
															data.skill,
															data.description
														);
													}}
												>
													Approve
												</button>
												<button
													className="border border-gray-400 py-1 px-1 rounded-md bg-red-500"
													onClick={() => {
														handleDisapproveFreelancer(data.userId);
													}}
												>
													Disapprove
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					{/* Bouton "See More" pour le tableau des autorisations en attente */}
					<div className="text-right mt-4">
						<button
							className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded"
							onClick={handleScrollToBottom}
						>
							See More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
