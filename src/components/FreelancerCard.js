/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillEnvironment } from "react-icons/ai";
import { doc, getDocs, collection } from "firebase/firestore";
import { db, storage } from "@/firebase";
import { useRouter } from "next/router";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { SiteLinksSearchBoxJsonLd } from "next-seo";
import AnnonceApproved from "../pages/Admin/AnnonceApproved/index";

const FreelancerCard = ({ setReceiverID }) => {
	const [freelancers, setFreelancerData] = useState([]);
	const router = useRouter();
	const [imageList, setImageList] = useState([]);

	const imageListRef = ref(storage, "images/");

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

	useEffect(() => {
		if (freelancers.length !== 0) {
			listAll(imageListRef)
				.then((response) => {
					response.items.forEach((image) => {
						const fileName = image._location.path_;
						const id_part = fileName.split("_");

						freelancers.forEach((freelancer) => {
							if (freelancer.id === id_part[1]) {
								getDownloadURL(image).then((url) => {
									setImageList((prevImageList) => [
										...prevImageList,
										{ id: id_part[1], url: url },
									]);
								});
							}
						});
					});
				})
				.catch((error) => {
					console.error("Error listing images:", error);
				});
		}
	}, [freelancers]);

	useEffect(() => {
		if (imageList.length != 0) {
			console.log(freelancers);

			console.log(imageList);
		}
	}, [imageList]);
	const fetchAllFreelancer = async () => {
		try {
			const querySnapshot = await getDocs(collection(db, "Freelancer"));
			if (!querySnapshot.empty) {
				const allDocs = [];
				querySnapshot.forEach((doc) => {
					const documentData = doc.data();
					allDocs.push({ id: doc.id, data: documentData });
				});
				setFreelancerData(allDocs);
			} else {
				console.error("No documents found in the collection");
			}
		} catch (error) {
			console.error("Error fetching user data:", error);
			throw error;
		}
	};

	const handleCardClick = (userid) => {
		setReceiverID(userid);
		router.push(`/DisplayFreelancerbyid/${userid}`);
	};
	return (
		<div>
			<section className="flex flex-col items-center justify-center mb-22">
				<section className="dark:bg-gray-900 py-10 px-12">
					<div className="text-letter-orange">
						<span>user.job</span>
					</div>

					<div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{freelancers.map((freelancer, index) => (
							<div
								key={index}
								className="my-8 rounded-lg shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
								onClick={() => handleCardClick(freelancer.id)}
							>
								{/* 					brooo, wait, niche jo space hai, udher data show kerwaana,ok	 */}

								<div className="cursor-pointer">
									<figure>
										<div className="relative h-72 overflow-hidden">
											{imageList.map((image) =>
												image.id === freelancer.id ? (
													<img
														key={image.id}
														src={image.url}
														width={100}
														height={100}
														alt="Placeholder"
														className="rounded-t-lg h-auto w-full absolute top-0"
													/>
												) : null
											)}
											{imageList.filter((image) => image.id === freelancer.id)
												.length === 0 && (
												<img
													key={freelancer.id}
													src="https://res.cloudinary.com/dgkp7pkly/image/upload/v1700827173/EQUINTERIM/bvofggf7jwc5wptxilbn.png"
													width={100}
													height={100}
													alt="Placeholder"
													className="rounded-t-lg h-72 w-full object-cover"
												/>
											)}
											{/* <div className="text-letter-grey mb-10 m-5">
											</div> */}
										</div>
										{/* how to display these things? and data and phone not , we dont need these things
											thanks, now meet pai a jao, DB ka ker lain ok:) */}
										<figcaption className="p-4">
											<span>{freelancer.data.name}</span>
											<div className="flex">
												<AiFillEnvironment className="text-letter-orange" />
												<span>{freelancer.data.skill}</span>
											</div>
										</figcaption>
									</figure>
								</div>
							</div>
						))}
					</div>
				</section>
			</section>
		</div>
	);
};

export default FreelancerCard;
