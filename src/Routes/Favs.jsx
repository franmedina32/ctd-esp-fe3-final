import React, { useEffect, useState } from "react";
import Card from "../Components/Card";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import ThemeContext from "../Components/utils/global.context"

const Favs = () => {

  const [dentistasFav, setDentistasFav] = useState([])

  useEffect(()=>{
    setDentistasFav(JSON.parse(localStorage.getItem('favs')))
  },[])



  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
       {dentistasFav ? dentistasFav.map(dentista => <Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id}></Card>) : <p>NO HAY FAVORITOS</p>}
      </div>
    </>
  );
};

export default Favs;
