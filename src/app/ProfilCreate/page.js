"use client";
import React, { useState } from "react";

import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

async function addDataToFireStore(
  name,
  username,
  business,
  phone,
  approved,
  email,
  role,
  annonces,
  adress,
  postalCode
) {
  try {
    

    const docRef = await addDoc(
      collection(db, "Employeur"),

      {
        name: name,
        username: username,
        email: email,
        business: business,
        phone: phone,
        approved: true,
        role: "user",
        annonces: annonces || "",
        adress: adress || "",
        // adress: adress ,
        ...(postalCode && { postalCode })
        // PostalCode: PostalCode || ""
      }
    );

    console.log("document ecrit pour cette id :", docRef.id);
    return true;
  } catch (error) {
    console.error("error pour l'ajout", error);
    return false;
  }

}

function ProfilCreate() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [annonces, setAnnonces] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  
  // console.log("adresse:", adress, postalCode, name);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const added = await addDataToFireStore(
      name,
      username,
      business,
      phone,
      email,
      annonces,
      adress,
      postalCode
    );
    console.log("adresse:", adress, postalCode, name);
    if (added) {
      setName("");
      setUsername("");
      setBusiness("");
      setEmail("");
      setPhone("");
      setAdress("");
      setPostalCode("");
      alert("votre profil vient d'être crée ");
    }

    console.log("adresse:", adress, postalCode, name);
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

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-letter-grey mx-3"
              >
                Email
              </label>
              <div className="mt-2 mx-2">
                <input
                  id="email"
                  placeholder="contact@ecurieblue.com"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="  block w-full rounded-full border-0 py-3.5 px-4 text-letter-grey  focus:ring-letter-orange-600 focus: bg-black sm:text-sm sm:leading-6 placeholder-letter-black-button  placeholder-gray-600 "
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
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  autoComplete="postalCode"
                  required
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
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
