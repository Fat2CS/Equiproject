"use client";
import Pronavbar from "@/components/Pronavbar";
import React, { useEffect, useState } from "react";
import { db } from "@/firebase";
import {
	collection,
	addDoc,
	setDoc,
	doc,
	getDoc,
	getDocs,
	updateDoc,
} from "firebase/firestore";
import {} from "firebase/firestore";
import { useRouter } from "next/router";
import { userAgent } from "next/server";

function EditUserInfo() {
	const router = useRouter();
	const { id } = router.query;
	const [userData, setUserData] = useState([]);
	const [key, setkey] = useState(1);
	const [workData, setWorkData] = useState({
		name: "",
		email: "",
		level: "",
		skill: "",
		description: "",
	});

	useEffect(() => {
		async function fetchDataFromFirestore() {
			try {
				if (id) {
					const userDocRef = doc(db, "Freelancer", id);
					const userDocSnap = await getDoc(userDocRef);

					if (userDocSnap.exists()) {
						const userData = userDocSnap.data();
						console.log("userData:", userData);
						setUserData([userData]);
					} else {
						console.error("Document not found");
					}
				} else {
					console.error("User ID is undefined");
				}
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		}
		id && fetchDataFromFirestore();
		const key = localStorage.getItem("show");
		setkey(Number(key));
	}, [id]);

	useEffect(() => {
		if (userData.length !== 0) {
			console.log(userData[0]);
			setWorkData(userData[0]);
		}
	}, [userData]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		addDataToFirestore();
	};

	async function addDataToFirestore() {
		if (id) {
			try {
				const docRef = doc(db, "Freelancer", id);
				await updateDoc(docRef, workData);
				router.push("../" + id);
			} catch (error) {
				console.error("Error updating status:", error);
				// Handle the error (e.g., display a message to the user)
			}
		} else {
			console.error("User ID is undefined");
		}
	}

	const workDataInputHandler = (e) => {
		setWorkData({ ...workData, [e.target.name]: e.target.value });
	};
	return (
		<>
			<div className="flex ">
				<div className="lg:block hidden ">
					<Pronavbar className="m-0 p-0" />
				</div>

				<div className="sm:m-8 px-2 sm:w-full md:w-1/2 md:px-2 md:mt-20 md:pt-4 md: ">
					<div className="text-letter-grey  mt-10 text-lg lg:mt-6 md:ml-20 md:pl-7 mb-15">
						<h1>Edit Your Information</h1>
					</div>
					<div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm lg:max-w-lg  ">
						<form onSubmit={handleSubmit} className="space-y-6 lg:ml-4">
							<div>
								<div className="grid grid-cols-2 gap-6">
									<div>
										<label className="text-letter-grey">Name</label>
										<input
											name="name"
											type="text"
											value={workData.name}
											onChange={workDataInputHandler}
											className="block mt-3 w-full rounded-full border-0 py-2 px-4 text-letter-grey focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button placeholder-gray-600"
										/>
									</div>
									<div>
										<label className="text-letter-grey">E-mail</label>
										<input
											name="email"
											type="text"
											value={workData.email}
											onChange={workDataInputHandler}
											className="block mt-3 w-full rounded-full border-0 py-2 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button  placeholder-gray-600"
										/>
									</div>
									<div>
										<label className="text-letter-grey">Level</label>
										<input
											name="level"
											type="text"
											value={workData.level}
											onChange={workDataInputHandler}
											className="block mt-3 w-full rounded-full border-0 py-2 px-4 text-letter-grey focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button placeholder-gray-600"
										/>
									</div>
									<div>
										<label className="text-letter-grey">Skills</label>
										<input
											name="skill"
											type="text"
											value={workData.skill}
											onChange={workDataInputHandler}
											className="block mt-3 w-full rounded-full border-0 py-2 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button  placeholder-gray-600"
										/>
									</div>
									<div className="col-span-2">
										{key === 1 ? (
											<label className="text-letter-grey">Description</label>
										) : (
											<label className="text-letter-grey">Experience</label>
										)}

										<textarea
											name="description"
											value={workData.description}
											onChange={workDataInputHandler}
											className="block mt-3 w-full rounded-full border-0 py-2 px-4 text-letter-grey focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button placeholder-gray-600"
										/>
									</div>
								</div>

								<div>
									<button
										type="submit"
										className=" mt-10 flex w-full justify-center rounded-full bg-letter-orange px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-letter-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-letter-orange-600 lg:w-2/3 lg:mx-auto"
									>
										Update
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default EditUserInfo;
