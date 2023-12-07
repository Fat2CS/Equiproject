import React from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { PiEnvelopeThin } from "react-icons/pi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";
const FreeNavbarW = () => {
  return (
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
  );
};

export default FreeNavbarW;
