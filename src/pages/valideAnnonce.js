import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ValideAnnone = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(`/profilPro/${userId}`);
    }, 5000);
    return () => clearTimeout(timer);
  },[]); 
    
  return <div className="flex items-center justify-center h-screen text-center text-letter-grey">
    <div className="mx-auto w-full px-20 mt-8 py-15">

       <h1 className = "text-oxl">Bravo votre annonce et en cours de validation !</h1>
    <div><span> Votre annonce sera publié dans quelques instants.</span></div>
    </div>
   
    
    </div>;
};

export default ValideAnnone;
