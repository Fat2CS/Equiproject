
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
import FreeNavbar from "@/components/FreeNavbar";
import FreeNavbarW from "@/components/FreeNavbarW";
import Pronavbar from "@/components/Pronavbar";
import FreelancerCard from "@/components/FreelancerCard";
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

      <div className="bg-black-buttonshadow w-full p-2  flex items-center justify-between flex-row md:text-base md:hidden"></div>

      <div className=" md:flex md:flex-row">
        {/* <FreeNavbar />
        <FreeNavbarW /> */}
<div className="mt-5">
     <Pronavbar />
</div>
       

        <FreelancerCard/>
      </div>
    </>
  );
}