import React from "react";
import { AiFillEnvironment } from "react-icons/ai";

const AnnonceById = () => {
 
  return (
    <div className="flex-1 p-4 w-full ">
      {/* Champ de recherche */}

      <div className="md:relative md:w-full py-15 ">
        <div className=" px-10  profil rounded-lg picture  w-2/3 h-80 bg-letter-orange sm:m-auto  "></div>
      </div>

      {/* Conteneur de graphiques */}
      <div className=" mt-8 flex justify-center items-center md:flex-row">
        {/* Premier conteneur - Graphe des utilisateurs */}

        {/* Deuxième conteneur - Graphe des commerces */}
        <div className="w-full md:w-2/3">
          <span
            className=" text-lg font-bold text-letter-orange  
                    mt-8 mb-4
                    "
          >
            JobName
          </span>
          <div className=" bg-black-button border border-border-black-button p-4 shadow rounded-lg  text-letter-grey overflow-y-auto relative mt-5">
           <div className="flex"><AiFillEnvironment className="text-letter-orange mr-1" />
            <span>lieu </span></div>
            
            <span>Niveau d'expérience</span> <br></br>
            <span>Budget : </span>
            <h1>Durée :"annonces.duree" </h1>
            
          </div>

          <div className="mt-5">
            <span
              className=" text-lg font-bold text-letter-grey border-b-2 border-border-black-button
                     mb-4
                    "
            >
              {" "}
              Desription
            </span>
          </div>

          <div className="w-full  mt-5  bg-black-button border border-border-black-button p-4 shadow rounded-lg  text-letter-grey overflow-y-auto">
            <div className="flex justify-end"></div>
          
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque veniam asperiores aliquam reprehenderit nemo est unde tempora beatae, sed inventore ad quo eos praesentium sunt quas at quaerat corporis fugit. </span>
          </div>
          <div className="  mt-10 mb-10
      ">

        <button className="bg-letter-orange bg-opacity-80 text-letter-grey border  hover:bg-letter-grey hover:text-black-body font-bold py-2 px-4 rounded-full">
              Je postule
            </button> 
      </div>

          
        </div>

        
      </div>
     

      

    

      
      

 
      

    
    </div>
  );
};

export default AnnonceById;
