import { useState } from "react";
import Image from "next/image";

// icons
import { PiEnvelopeThin } from "react-icons/pi";

import { FaMagnifyingGlass } from "react-icons/fa6";

import { PiNewspaperClippingLight } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";

import { FaPencil } from "react-icons/fa6";


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

  return (<>

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
      
    <section className="flex flex-col items-center justify-center mb-22">


      {/* Card List Section */}
      <section className=" dark:bg-gray-900 py-10 px-12">
        {/* Card Grid */}
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
            >
              {/* Clickable Area */}
              <div className="cursor-pointer">
                <figure>
                  {/* Image */}
                  <Image
                    src={
                      "https://res.cloudinary.com/dgkp7pkly/image/upload/v1700827173/EQUINTERIM/bvofggf7jwc5wptxilbn.png"
                    }
                    width={100}
                    height={100}
                    alt="Placeholder"
                    className="rounded-t h-72 w-full object-cover"
                  />

                  <figcaption className="p-4">
                    {/* Title */}
                    <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                      {post.title}
                    </p>

                    {/* Description */}
                    <small className="leading-5 text-gray-500 dark:text-gray-400">
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
    </>
  );
}
