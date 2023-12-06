
import { useState } from "react";
import Image from "next/image";
import { AiFillEnvironment } from "react-icons/ai";
import { PiEnvelopeThin } from "react-icons/pi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";
import AnnonceCard from "@/components/AnnonceCard";

export default function FreelancerResultSearch() {
  const [posts, setPosts] = useState([
    // Remplacez ceci par votre propre tableau de données
    {
      title: "Card Title 1",
      description: "Description for Card 1",
      image: "https://example.com/image1.jpg",
      link: "https://example.com/link1"
    },
    {
      title: "Card Title 2",
      description: "Description for Card 2",
      image: "https://example.com/image2.jpg",
      link: "https://example.com/link2"
    }
    // Ajoutez autant d'éléments que nécessaire
  ]);

  return (
    <>
      <div className="text-letter-orange">
        <h1>Bienvenue userData.name, </h1>
      </div>

      <div className="bg-black-buttonshadow w-full p-2  flex items-center justify-between flex-row md:text-base md:hidden">
        {/* ... */}
        <nav className="flex items-center space-x-16 justify-around m-auto">
          <Link href="/ProfilPro">
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

      <div className=" flex flex-row">
        <div
          className="p-2 bg-black-button w-full md:w-60 flex-col md:flex hidden"
          id="sideNav"
        >
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
            {/* <Link href={""}>
              <div className="flex ml-2 mt-9">
                <div>
                  <BsPersonWorkspace className="text-letter-orange mt-1 mr-2" />
                </div>
                <div>
                  <ul className="flex items-center space-x-4 text-letter-grey">
                    Déposer une annonce{" "}
                  </ul>
                </div>
              </div>{" "}
            </Link> */}
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
        </div>

        <AnnonceCard />
      </div>
    </>
  );
}
