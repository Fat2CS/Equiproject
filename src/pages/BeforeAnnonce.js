import React from "react";
import Link from "next/link";


const BeforeAnnonce = () => {
  return (
    <div className="m-auto text-center text-letter-grey mt-20 ">
      <h1 className="text-lg">Trouvez le meilleur prestataire en moins de 24 heures</h1>

     

      <div className="md:flex mt-7 md:mt-10 m-auto md:w-1/2">
        <div className="rounded-full bg-letter-grey w-20 h-20 m-auto md:m-6 flex items-center justify-center mt-7 ">
          <span className="text-letter-orange ">1</span>
         
        </div>

        <div className="  mt-8   md:text-left ml-3 md:mt-7 ">

<div>
            <h1> Décrivez votre projet </h1>
          </div>
    <span>Prenez votre temps pour détailler votre mission et vos critères de recherche.</span>
        </div>
      </div>
      <div className="md:flex mt-7 md:mt-10 m-auto md:w-1/2">
        <div className="rounded-full bg-letter-grey w-20 h-20 m-auto md:m-6 flex items-center justify-center mt-7 ">
          <span className="text-letter-orange ">2</span>
         
        </div>

        <div className="  mt-8   md:text-left ml-3 md:mt-7 ">

<div>
            <h1> Nous examinons votre demande </h1>
          </div>
    <span>Nous étudions votre annonce et trouvons le profil parfait</span>
        </div>
      </div>
      <div>
      <div className="md:flex mt-7 md:mt-10 m-auto md:w-1/2">
        <div className="rounded-full bg-letter-grey w-20 h-20 m-auto md:m-6 flex items-center justify-center mt-7 ">
          <span className="text-letter-orange ">3</span>
         
        </div>

        <div className="  mt-8   md:text-left ml-3 md:mt-7 ">

<div>
            <h1> Trouvez le prestataire </h1>
          </div>
    <span>Echangez avec les meilleurs candidats selectionnés par nos soins.</span>
        </div>

       
      </div>
{/* lien router id */}

 <div className="text-center ">

  <Link href={"AnnoncesCreate"}>
   <button className="bg-letter-orange  hover:bg-letter-grey hover:text-black-body font-bold py-4 px-4 rounded-full mt-9 ">
                Déposer mon annonce
              </button>
  </Link>
             
            </div>
      </div>
      <div></div>
    </div>
  );
};
export default BeforeAnnonce;
