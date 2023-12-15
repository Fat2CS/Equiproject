"use client";
import React, { useEffect, useState } from "react";
import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { db, storage } from "@/firebase";

// icons
import { PiEnvelopeThin } from "react-icons/pi";

import { FaMagnifyingGlass } from "react-icons/fa6";

import { PiNewspaperClippingLight } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";

const ListMessage = () => {
  const [userIDS, setUserIDS] = useState([]);
  const [messages, setMessage] = useState([]);
  const [messagesData, setMessagesData] = useState([]);
  const router = useRouter();

  // Assuming you are using Next.js dynamic routing
  useEffect(() => {
    const { id } = router.query;
    const fetchMessages = async () => {
      try {
        const messagesRef = collection(db, "Messages");
        const querySnapshot = await getDocs(messagesRef);

        querySnapshot.forEach((doc) => {
          // Access individual document data here
          let messID = doc.id.split("_");
          if (id == messID[0]) {
            setUserIDS((userIDS) => [...userIDS, messID[1]]);
          } else if (id == messID[1]) {
            setUserIDS((userIDS) => [...userIDS, messID[0]]);
          }
          // Perform actions with each document's data as needed
          setMessagesData((messagesData) => [...messagesData, doc.data()]);
        });
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (userIDS.length != 0) {
      fetchDataFromFirestore();
    }
  }, [userIDS]);

  const [available, setAvailable] = useState(true);

  async function fetchDataFromFirestore() {
    try {
      for (const userId of userIDS) {
        const professionalDocRef = doc(db, "Professional", userId);
        const freelancerDocRef = doc(db, "Freelancer", userId);

        const professionalDocSnap = await getDoc(professionalDocRef);
        const freelancerDocSnap = await getDoc(freelancerDocRef);

        if (professionalDocSnap.exists()) {
          const messages = professionalDocSnap.data();
          setMessage((prevUserData) => [...prevUserData, messages]);
        } else if (freelancerDocSnap.exists()) {
          const messages = freelancerDocSnap.data();
          setMessage((prevUserData) => [...prevUserData, messages]);
        } else {
          console.log("User with id", userId, "not found!");
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  return (
    <div className="flex flex-col h-screen bg-black-body">
      {/* Barre de navigation supérieure */}

      <div className="text-letter-orange">
        <h1>Bienvenue messages.name, </h1>
      </div>
      <div className="bg-black-buttonshadow w-full p-2  flex items-center justify-between flex-row md:text-base md:hidden">
        {/* ... */}
        <nav className="flex items-center space-x-16 justify-around m-auto">
          {/* <Link href={`/Message/{${id}`}>
            <div className="items-center space-x-4 text-letter-grey">
              <PiEnvelopeThin className="text-letter-orange mt-1 mr-2 w-5 h-5" />
            </div>{" "}
          </Link> */}

          <Link href="/FindMission">
            <div className=" items-center space-x-4 text-letter-grey">
              <FaMagnifyingGlass className="text-letter-orange mt-1 mr-2 w-5 h-5" />
            </div>
          </Link>
          <Link href="/ProfilPro">
            <div className=" items-center space-x-4 text-letter-grey">
              <PiNewspaperClippingLight className="text-letter-orange mt-1 mr-2 w-5 h-5" />
            </div>{" "}
          </Link>
          <Link href="/ProfilPro">
            <div className=" items-center space-x-4 text-letter-grey">
              <BsPersonWorkspace className="text-letter-orange mt-1 mr-2 w-5 h-5" />
            </div>{" "}
          </Link>
          <Link href={"/CreateAnnonce/"}>
            <div className=" items-center space-x-4 text-letter-grey">
              <RiLogoutCircleRLine className="text-letter-orange mt-1 mr-2 w-5 h-5" />
            </div>
          </Link>
        </nav>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 flex flex-wrap">
        {/* Barre latérale de navigation */}
        <div
          className="p-2 bg-black-button w-full md:w-60 flex-col md:flex hidden"
          id="sideNav">
          <nav>
            <Link href={""}>
              <div className="flex ml-2 mt-9">
                <div>
                  <PiEnvelopeThin className="text-letter-orange mt-1 mr-2 w-5 h-5" />
                </div>
                <div>
                  <ul className="flex items-center space-x-4 text-letter-grey">
                    {" "}
                    Message{" "}
                  </ul>
                </div>
              </div>{" "}
            </Link>
            <Link href={"/FindMission"}>
              <div className="flex ml-2 mt-9">
                <div>
                  <FaMagnifyingGlass className="text-letter-orange mt-1 mr-2" />
                </div>
                <div>
                  <ul className="flex items-center space-x-4 text-letter-grey">
                    {" "}
                    Trouver une mission{" "}
                  </ul>
                </div>
              </div>{" "}
            </Link>

            <Link href="/ProfilPro">
              <div className="flex ml-2 mt-9">
                <div>
                  <PiNewspaperClippingLight className="text-letter-orange mt-1 mr-2" />
                </div>
                <div>
                  <ul className="flex items-center space-x-4 text-letter-grey">
                    {" "}
                    Suivre mes candidatures{" "}
                  </ul>
                </div>
              </div>{" "}
            </Link>

            <Link href="/ProfilPro">
              <div className="flex ml-2 my-10">
                <div>
                  <RiLogoutCircleRLine className="text-letter-orange mt-1 mr-2" />
                </div>

                <div>
                  <ul className="flex items-center space-x-4 text-letter-grey">
                    {" "}
                    Déconnecter{" "}
                  </ul>
                </div>
              </div>{" "}
            </Link>
          </nav>

          {/* ... */}
        </div>

        {/* Zone de contenu principal */}
        <div className=" text-letter-grey flex-1 p-4 w-full ">
          {/* Champ de recherche */}
          <div className="space-y-5">
            <div className="border-b border-b-gray-200">
              <ul className="-mb-px flex items-center gap-4 text-sm font-medium">
                {/* Add more menu items as needed */}
              </ul>
            </div>
            <div>
              {/* Render messages as a table */}
              <table className=" text-letter-orange w-full border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-black-button">
                  <tr>
                    <th className="py-2 px-4 border-b">Date</th>
                    <th className="py-2 px-4 border-b">User</th>
                    <th className="py-2 px-4 border-b">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((msg, index) => (
                    <tr
                      key={index}
                      onClick={() => router.push(`/FreelancerMessage/ChatMessage/${userIDS[index]}`)}
                      className={`cursor-pointer ${
                        index % 2 === 0 ? "bg-gray-100" : ""
                      }`}>
                      <td className=" text-center py-2 px-4 border-b">
                        {msg.email}
                      </td>
                      <td className=" text-center py-2 px-4 border-b">
                        {msg.type}
                      </td>
                      <td className=" text-center py-2 px-4 border-b">
                        {
                          messagesData[index].messages[
                            messagesData[index].messages.length - 1
                          ].text
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListMessage;
