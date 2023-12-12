import { useState } from "react";
import { useRouter } from "next/router";
import Pronavbar from "@/components/Pronavbar";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebase";
import { useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";

import FreelancerSearchById from "@/components/FreelancerSearchById";

export default function DisplayFreelancerById() {
	const router = useRouter();
	const [userData, setUserData] = useState(null);
	const [userId, setUserId] = useState(null);
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
							});
						}
					});
				});
				fetchDataFromFirestore(id);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.isReady, router.query]);

	async function fetchDataFromFirestore(userId) {
		try {
			const userDocRef = doc(db, "Freelancer", userId);

			const userDocSnap = await getDoc(userDocRef);

			if (userDocSnap.exists()) {
				const userData = userDocSnap.data();
				setUserData(userData);
			} else {
				console.error("Document not found");
			}
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	}

	return (
		<>
			<div className="text-letter-orange">
				<h1>Bienvenue userData.name, </h1>
			</div>

			<div className="bg-black-buttonshadow w-full p-2  flex items-center justify-between flex-row md:text-base md:hidden"></div>

			<div className=" md:flex md:flex-row">
				<div className="mt-5">
					<Pronavbar login={true} receiverId={userId}/>
				</div>
				{userData && (
					<FreelancerSearchById
						id={userId}
						userData={userData}
						profileImgURL={profileImage}
					/>
				)}
			</div>
		</>
	);
}
