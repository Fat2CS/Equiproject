import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { AiFillEnvironment } from "react-icons/ai";
const DisplayAnnonceApproved = () => {
  const [posts, setPosts] = useState([
    // Remplacez ceci par votre propre tableau de données
    {
      title: "Groom motivé",
      lieu: "Londres",
      niveau: "Expert",
      durée: "1 mois",
      description:
        "Je recherche Groom motivé pour un concours qui aura lieu à Londres",
      image: "https://example.com/image1.jpg",
      link: "https://example.com/link1"
    },
    {
      title: "Groom dynamique",
      lieu: "Enghien",
      niveau: "Débutant",
      durée: "1 mois",
      description: "Description for Card 2",
      image: "https://example.com/image2.jpg",
      link: "https://example.com/link2"
    }
    // Ajoutez autant d'éléments que nécessaire
  ]);
  return (
    <div>
      <section className="flex flex-col items-center justify-center mb-22">
        {/* Card List Section */}
        <section className=" dark:bg-black-button py-10 px-12">
          <div className="text-letter-grey">
            {" "}
            <span className="text-lg"> Annonces de mission disponible </span>
            <br></br>
            <span>Toutes les annonces</span>
          </div>

          {/* Card Grid */}
          <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
            {posts.map((post, index) => (
              <div
                key={index}
                className="my-8  rounded-lg shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-black-button dark:bg-gray-800 duration-300 hover:-translate-y-1"
              >
                {/* Clickable Area */}
                <div className="cursor-pointer">
                  <figure>
                    {/* Image */}

                    <div className="relative">
                      <Image
                        src={
                          "https://res.cloudinary.com/dgkp7pkly/image/upload/v1700827173/EQUINTERIM/bvofggf7jwc5wptxilbn.png"
                        }
                        width={100}
                        height={100}
                        alt="Placeholder"
                        className=" rounded-t-lg h-72 w-full object-cover"
                      />
                    </div>

                    <figcaption className="p-4">
                      {/* Title */}
                      <p className="  text-lg mb-4 font-bold leading-relaxed text-letter-orange dark:text-gray-300">
                        {post.title}
                      </p>
                      <div className="flex">
                        {" "}
                        <AiFillEnvironment className="text-letter-orange mr-1" />
                        <small className=" text-center leading-5 text-letter-grey dark:text-gray-400">
                          {post.lieu}
                        </small>
                      </div>

                      <small className=" text-center leading-5 text-letter-grey dark:text-gray-400">
                        Niveau d'expérience : {post.niveau}
                      </small>
                      <br></br>
                      <small className=" text-center leading-5 text-letter-grey dark:text-gray-400">
                        Durée de la mission : {post.durée}
                      </small>

                      <br></br>

                      <br></br>
                      {/* Description */}
                      <small className=" text-center leading-5 text-letter-grey dark:text-gray-400">
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
    </div>
  );
};

export default DisplayAnnonceApproved;
