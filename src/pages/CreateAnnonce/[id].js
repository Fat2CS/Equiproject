"use client";
import Pronavbar from "@/components/Pronavbar";
import React, { useState } from "react";
import { db } from "@/firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

import { useRouter } from "next/navigation";
import { userAgent } from "next/server";

function AnnoncesCreate() {
	const router = useRouter();

	const userId =
		typeof window !== "undefined" ? localStorage.getItem("senderID") : null;
	const handleSubmit = async (e) => {
		e.preventDefault();

		addDataToFireStore();
		router.push("/validateAnnonce");
	};

	async function addDataToFireStore() {
		workData.userId = userId;

		try {
			// Use addDoc to add a new document to the "AnnoucesRequest" collection
			await addDoc(collection(db, "AnnoucesRequest"), workData);
		} catch (error) {
			console.error("Error adding data", error);
		}
	}


	// New state
	const [workData, setWorkData] = useState({
		category: "",
		subCategory: "",
		duration: "",
		budget: "",
		description: "",
	});

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
						<h1>Which provider are you looking for?</h1>
					</div>
					<div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm lg:max-w-lg  ">
						<form onSubmit={handleSubmit} className="space-y-6 lg:ml-4">
							<div>
								<div className="grid grid-cols-2 gap-6">
									<div>
										<label className="text-letter-grey">Category</label>
										<input
											name="category"
											type="text"
											value={workData.category}
											onChange={workDataInputHandler}
											className="block mt-3 w-full rounded-full border-0 py-2 px-4 text-letter-grey focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button placeholder-gray-600"
										/>
									</div>
									<div>
										<label className="text-letter-grey">Sub-category</label>
										<input
											name="subCategory"
											type="text"
											value={workData.subCategory}
											onChange={workDataInputHandler}
											className="block mt-3 w-full rounded-full border-0 py-2 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button  placeholder-gray-600"
										/>
									</div>
									<div>
										<label className="text-letter-grey">Duration</label>
										<input
											name="duration"
											type="text"
											value={workData.duration}
											onChange={workDataInputHandler}
											className="block mt-3 w-full rounded-full border-0 py-2 px-4 text-letter-grey focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button placeholder-gray-600"
										/>
									</div>
									<div>
										<label className="text-letter-grey">Budget</label>
										<input
											name="budget"
											type="text"
											value={workData.budget}
											onChange={workDataInputHandler}
											className="block mt-3 w-full rounded-full border-0 py-2 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button  placeholder-gray-600"
										/>
									</div>
									<div className="col-span-2">
										<label className="text-letter-grey">Description</label>
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
										Valider
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

export default AnnoncesCreate;
