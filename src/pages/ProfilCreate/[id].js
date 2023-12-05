"use client";
import React, { useState } from "react";

import { db } from "../../firebase";
import { collection, addDoc,updateDoc,doc } from "firebase/firestore";

import { useRouter } from "next/router";

function ProfilCreate() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState("");

  const [username, setUsername] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [annonces, setAnnonces] = useState("");

  const [adress, setAdress] = useState("");
  const [postal, setPostal] = useState("");
  

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const added = await addDataToFireStore(
      name,
      username,
      business,
      phone,
      true, 
      "user",
      "",
      adress,
      postal,
      
    );

    if (added) {
      setName("");
      setUsername("");
      setBusiness("");
      setPhone("");
      setAdress("");
      setPostal("");

      alert("votre profil vient d'être crée ");
    }
  };

  async function addDataToFireStore(
    name,
    username,
    business,
    phone,
    approved,
    role,
    annonces,
    adress,
    postal
  ) {
		try {
			const docId = id; // Assuming 'id' is the ID of the specific user document

			const docRef = doc(db, "Professional", docId); // Reference to the specific document in 'Professional' collection

			await updateDoc(docRef, {
				// Update the document with new data
				name: name,
				username: username,
				business: business,
				phone: phone,
				approved: true,
				role: "user",
				annonces: "",
				adress: adress || "",
				postal: postal || "",
			});

			console.log("Document updated with ID: ", docId);
			// Redirect or perform further actions as needed
			router.push(`/ProfilPro/${docId}`);
			return true;
		} catch (error) {
			console.error("Error updating document: ", error);
			return false;
		}
	}

  return (
    <div className="flex  min-h-full flex-1 flex-col  px-3 py-12 lg:px-2 ">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm lg:max-w-lg ">
        <form onSubmit={handleSubmit} className="space-y-6 lg:ml-4">
          <div className="flex  ">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-letter-grey"
              >
                Nom
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  placeholder="Rabbit"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="  block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button  placeholder-gray-600 "
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-letter-grey mx-3"
              >
                Prénom
              </label>
              <div className="mt-2 mx-2">
                <input
                  id="username"
                  placeholder="Justine"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="  block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button  placeholder-gray-600 "
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-letter-grey"
            >
              Nom de lécurie
            </label>
            <div className="mt-2">
              <input
                id="business"
                placeholder="L'écurie Jolie"
                name="business"
                type="text"
                autoComplete="business"
                required
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                className="  block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button lg:w-1/2  placeholder-gray-600"
              />
            </div>
          </div>

          <div className="flex  ">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-letter-grey"
              >
                Téléphone
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  placeholder="06 07 99 00 56"
                  name="phone"
                  type="tel"
                  // autoComplete="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="  block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button placeholder-gray-600 "
                />
              </div>
            </div>
          </div>

          <div className="flex">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-letter-grey"
              >
                Adresse
              </label>
              <div className="mt-2">
                <input
                  placeholder="rue de la joie "
                  id="adress"
                  name="adress"
                  type="text"
                  autoComplete=""
                  required
                  value={adress}
                  onChange={(e) => setAdress(e.target.value)}
                  className="  block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-gray-600 "
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-letter-grey mx-3"
              >
                Code Postal
              </label>
              <div className="mt-2 mx-2">
                <input
                  placeholder="83550 "
                  id="postal"
                  name="postal"
                  type="number"
                  autoComplete="postal"
                  required
                  value={postal}
                  onChange={(e) => setPostal(e.target.value)}
                  className="  block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-gray-600 "
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-full bg-letter-orange px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-letter-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-letter-orange-600 lg:w-2/3 lg:mx-auto"
            >
              Valider
            </button>
          </div>
        </form>
        ;
      </div>
    </div>
  );
}
export default ProfilCreate;
