
import React from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { PiEnvelopeThin } from "react-icons/pi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";   
import Link from "next/link";

const FreeNavbar = () => {
  return <div className="bg-black-buttonshadow w-full p-2  flex items-center justify-between flex-row md:text-base md:hidden">
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
</div>;
};

export default FreeNavbar;
