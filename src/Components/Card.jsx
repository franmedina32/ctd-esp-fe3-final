import React, { useEffect, useState } from "react";
import docImg from "../images/doctor.jpg"
import { JsonFunction, Link } from "react-router-dom";
import Detail from "../Routes/Detail";

const Card = ({ name, username, id }) => {
  const[favorito, setFavorito] = useState();
  //let storedFavs = JSON.parse(localStorage.getItem('favs')) || []


  const newFav = () => {
    let storedFavs = JSON.parse(localStorage.getItem('favs')) || []
    const currentFav = {
    id: `${id}`,
    name: `${name}`,
    username: `${username}`,
    img: `${docImg}`
  }
    if(storedFavs === []){
      storedFavs = currentFav
    }
    else{
      storedFavs = [...storedFavs, currentFav]
    }
    localStorage.setItem('favs', JSON.stringify(storedFavs))
    alert("se agrego a favoritos")
  }

  const cardDetail = () => {
    return(
      <Detail></Detail>
    )
  }


  return (
    <div className="card">
        <img className="docImg" src={docImg}></img>
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/detail/${id}`}><h1>{name}</h1></Link>
        <h3>{username}</h3>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={newFav} className="favButton">&#9733;</button>
    </div>
  );
};

export default Card;
