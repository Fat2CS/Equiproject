import React, { useState,useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { AiFillEnvironment } from "react-icons/ai";

import { doc, setDoc, getDocs, addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
import { useRouter } from "next/router";

const FreelancerCard = ({setReceiverID}) => {
 const [posts, setFreelancerData] = useState([]);
 const router=useRouter();

 useEffect(() => {
		const fetchData = async () => {
			try {
				await fetchAllFreelancer();
			} catch (error) {
				console.error("Error fetching freelancer data:", error);
			}
		};

		fetchData();
 }, []);

 async function fetchAllFreelancer() {
		try {
			// Create a reference to the entire "FreelancerUser" collection
			const querySnapshot = await getDocs(collection(db, "Freelancer"));

			// Check if there are documents in the collection
			if (!querySnapshot.empty) {
				const allDocs = [];

				// Loop through each document in the collection
				querySnapshot.forEach((doc) => {
					// Extract the data from each document
					const documentData = doc.data();
					allDocs.push({ id: doc.id, data: documentData });
				});

				console.log(allDocs);

				// Set the state or perform actions with fetched data here
				setFreelancerData(allDocs);
			} else {
				// Handle the case where there are no documents in the collection
				console.error("No documents found in the collection");
			}
		} catch (error) {
			console.error("Error fetching user data:", error);
			// Handle the error as needed
			throw error;
		}
 }

 const handleCardClick=(userid)=>
 {
	setReceiverID(userid);
    router.push(`/DisplayFreelancerbyid/${userid}`);
 }
  return (
		<div>
			<section className="flex flex-col items-center justify-center mb-22">
				{/* Card List Section */}
				<section className=" dark:bg-gray-900 py-10 px-12">
					<div className="text-letter-orange">
						{" "}
						<span> user.job </span>
					</div>

					{/* Card Grid */}
					<div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{posts.map((post, index) => (
							<div
								key={index}
								className="my-8 rounded-lg shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
								onClick={() => handleCardClick(post.id)}
							>
								{/* Clickable Area */}
								<div className="cursor-pointer">
									<figure>
										{/* Image */}

										<div className="relative">
											<Image
												src={
													"https://res.cloudinary.com/dgkp7pkly/image/upload/v1700827173/EQUINTERIM/bvofggf7jwc5wptxilbn.png"
												}
												width={100}
												height={100}
												alt="Placeholder"
												className=" rounded-t-lg h-72 w-full object-cover"
											/>

											<div className="text-letter-grey absolute bottom-0 mb-10 m-5 ">
												<span> {post.data.name} </span>
												<div className="flex">
													<AiFillEnvironment className="text-letter-orange" />
													<span>{post.data.email}</span>
												</div>
											</div>
										</div>

										<figcaption className="p-4">
											{/* Title */}
											<p className=" text-center text-lg mb-4 font-bold leading-relaxed text-letter-orange dark:text-gray-300">
												{post.data.phone}
											</p>

											{/* Description */}
											<small className=" text-center leading-5 text-letter-orange dark:text-gray-400">
												{post.description}
											</small>
										</figcaption>
									</figure>
								</div>
							</div>
						))}
					</div>
				</section>
			</section>
			FreelancerCard
		</div>
	);
};

export default FreelancerCard;
