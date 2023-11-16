"use client";
import React, { useState } from "react";

import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

import { useRouter } from "next/navigation";

async function addDataToFireStore(

  router,
  name,
  username,
  business,
  phone,
  approved,
  role,
  annonces,
  adress,
  postal,
  userId
) {



  
  if (!userId) {
    console.error("UserId is undefined");
    return false;}


  try {

    console.log("Attempting to add data:", name, username, business, phone, approved, role, annonces, adress, postal, router, userId);
    const collectionRef = collection(db, "User", userId);
    console.log("Collection Reference:", collectionRef);

    // const docRef = await addDoc(
    //   collection(db, "User", userId),
    const docRef = await addDoc(collectionRef, {
      name: name,
      username: username,
      business: business,
      phone: phone,
      approved: true,
      role: "user",
      annonces: "",
      adress: adress || "",
      postal: postal || ""
      // adress: adress ,
      // ...(postal && { postal })
    });
    router.push(`/ProfilPro?id=${userId}`);
    console.log("document ecrit pour cette id :", docRef.id);
    return true;
  } catch (error) {
    console.error("error pour l'ajout", error);
    return false;
  }
}

function ProfilCreate({ userId }) {
  const router = useRouter();

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
      router,
      name,
      username,
      business,
      phone,
      true, // Assurez-vous que 'approved' est correct ici
      "user", // Assurez-vous que 'role' est correct ici
      "", // Assurez-vous que 'annonces' est correct ici
      adress,
      postal,
      userId
      
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
              Nom de l'écurie
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
