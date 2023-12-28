import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { AiFillEnvironment } from "react-icons/ai";

import { doc, setDoc, getDocs, addDoc, collection } from "firebase/firestore";
import { db, storage } from "@/firebase";
import { useRouter } from "next/router";

const SearchFreelancer = ({ setReceiverID, skill, level}) => {
	const [posts, setFreelancerData] = useState([]);
	const router = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			try {
				await fetchAllFreelancer();
			} catch (error) {
				console.error("Error fetching freelancer data:", error);
			}
		};
		if (skill != "" && level != "") fetchData();
	}, [skill, level]);

	async function fetchAllFreelancer() {
		try {
			const querySnapshot = await getDocs(collection(db, "Freelancer"));

			if (!querySnapshot.empty) {
				const allDocs = [];

				querySnapshot.forEach((doc) => {
					const documentData = doc.data();
					let skills = documentData.skill;
					let Level = documentData.level;
					const skills_arr = skills
						.split(",")
						.map((skill) => skill.trim().toLowerCase());
					// console.log(skills_arr.includes(skill.toLowerCase()));
					//console.log(Level);
					if (skills_arr.includes(skill.toLowerCase()) && level.toLowerCase() === Level.toLowerCase()) {
						allDocs.push({ id: doc.id, data: documentData });
					}
				});

				setFreelancerData(allDocs);
			} else {
				console.error("No documents found in the collection");
			}
		} catch (error) {
			console.error("Error fetching user data:", error);
			throw error;
		}
	}

	const handleCardClick = (userid) => {
		setReceiverID(userid);
		router.push(`/DisplayFreelancerbyid/${userid}`);
	};
	return (
		<div>
			<section className="flex flex-col items-center justify-center mb-22">
				{/* Card List Section */}
				<section className=" dark:bg-gray-900 py-10 px-12">
					<div className="text-letter-orange">
						{" "}
                        {posts.length!=0 &&
						<span> Found Matching Freelancers </span>
}
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
											{/* imageList */}
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
													<span>{post.data.skill}</span>
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
			SearchFreelancer
		</div>
	);
};

export default SearchFreelancer;
