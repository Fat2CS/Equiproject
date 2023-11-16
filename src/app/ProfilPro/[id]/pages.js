import React from "react";

export const ProfilPro = ({params}) => {
  return <div className="flex flex-col h-screen bg-gray-100">
  {/* Barre de navigation supérieure */}

  <div>
     <h1>Bienvenue {params}</h1>   

  </div>
  <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
    {/* ... */}
  <nav>
    

  </nav>



  </div>

  {/* Contenu principal */}
  <div className="flex-1 flex flex-wrap">
    {/* Barre latérale de navigation */}
    <div className="p-2 bg-white w-full md:w-60 flex-col md:flex hidden" id="sideNav">
      {/* ... */}
    </div>

    {/* Zone de contenu principal */}
    <div className="flex-1 p-4 w-full md:w-1/2">
      {/* Champ de recherche */}
      <div className="relative max-w-md w-full">
        {/* ... */}
      </div>

      {/* Conteneur de graphiques */}
      <div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
        {/* Premier conteneur - Graphe des utilisateurs */}
        <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
          {/* ... */}
          <div className="chart-container" style={{ position: 'relative', height: '150px', width: '100%' }}>
            {/* Canvas pour le graphique */}
            {/* <Chart type="line" data={usersChartData} /> */}
          </div>
        </div>

        {/* Deuxième conteneur - Graphe des commerces */}
        <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
          {/* ... */}
          <div className="chart-container" style={{ position: 'relative', height: '150px', width: '100%' }}>
            {/* Canvas pour le graphique */}
            {/* <Chart type="line" data={commercesChartData} /> */}
          </div>
        </div>
      </div>

      {/* Troisième conteneur - Tableau des autorisations en attente */}
      <div className="mt-8 bg-white p-4 shadow rounded-lg">
        {/* ... */}
      </div>

      {/* Quatrième conteneur - Tableau des transactions */}
      <div className="mt-8 bg-white p-4 shadow rounded-lg">
        {/* ... */}
      </div>
    </div>
  </div>
</div>


;
};

export default ProfilPro


