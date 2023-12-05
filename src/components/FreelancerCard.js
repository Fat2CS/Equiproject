import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import {AiFillEnvironment} from "react-icons/ai";
const FreelancerCard = () => {



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
  return <div>
    <section className="flex flex-col items-center justify-center mb-22">
          {/* Card List Section */}
          <section className=" dark:bg-gray-900 py-10 px-12">
            <div className="text-letter-orange">
              {" "}
              <span> Liste des "user.job" trouvé </span>
            </div>

            {/* Card Grid */}
            <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {posts.map((post, index) => (
                <div
                  key={index}
                  className="my-8 rounded-lg shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
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

                        <div className="text-letter-grey absolute bottom-0 mb-10 m-5 ">
                          <span> David Roux </span>
                          <div className="flex">
                            <AiFillEnvironment className="text-letter-orange" />
                            <span>Lille</span>
                          </div>
                        </div>
                      </div>

                      <figcaption className="p-4">
                        {/* Title */}
                        <p className=" text-center text-lg mb-4 font-bold leading-relaxed text-letter-orange dark:text-gray-300">
                          {post.title}
                        </p>

                        {/* Description */}
                        <small className=" text-center leading-5 text-letter-orange dark:text-gray-400">
                          Expert -freelancer.niveaudexperience-
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
    
    
    FreelancerCard</div>;
};

export default FreelancerCard;
