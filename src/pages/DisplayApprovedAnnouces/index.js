/* eslint-disable react/no-unescaped-entities */
import React, { useState,useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { AiFillEnvironment } from "react-icons/ai";
import { doc, setDoc, getDocs, addDoc, collection } from "firebase/firestore";
import { db, storage } from "@/firebase";
const DisplayAnnonceApproved = () => {
  const [annouces,setAnnouces] = useState([]);

  useEffect(() => {
		const fetchData = async () => {
			try {
				await fetchAllAnnouces();
			} catch (error) {
				console.error("Error fetching freelancer data:", error);
			}
		};

		fetchData();
	}, []);

	async function fetchAllAnnouces() {
		try {
			// Create a reference to the entire "FreelancerUser" collection
			const querySnapshot = await getDocs(collection(db, "Annouces"));

			// Check if there are documents in the collection
			if (!querySnapshot.empty) {
				const allDocs = [];

				// Loop through each document in the collection
				querySnapshot.forEach((doc) => {
					// Extract the data from each document
					const documentData = doc.data();
					allDocs.push({ id: doc.id, data: documentData });
				});

				// Set the state or perform actions with fetched data here
				setAnnouces(allDocs);
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
  return (
    <div>
      <section className="flex flex-col items-center justify-center mb-22">
        {/* Card List Section */}
        <section className="w-full dark:bg-black-button py-10 px-12">
          <div className="text-letter-grey">
            {" "}
            <span className="text-lg"> Find the Annouce you are Looking for </span>
            <br></br>
            <span>All Annouces</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-neutral-600">
            {annouces.map((annouce, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-black-button dark:bg-gray-800 duration-300 hover:-translate-y-1">
                <div className="cursor-pointer">
                  <figure>
                    <figcaption className="flex flex-col p-4 text-white">
                      <h2 className="text-lg">{annouce.data.category}</h2>
                      <div className="flex w-full justify-between">
                        <h3>{annouce.datasubCategory}</h3>
                        <h3 className="text-lg font-bold">${annouce.data.budget}</h3>
                      </div>
                      <h3>{annouce.data.duration}</h3>
                      <h3 className="mt-2">{annouce.data.description}</h3>
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

export default DisplayAnnonceApproved;