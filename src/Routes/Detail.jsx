import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {id} = useParams()
  const urlDetail = 'https://jsonplaceholder.typicode.com/users/'+ id
  const [dentistDetail, setDentistDetail] = useState()
  

  useEffect(()=>{
    fetch(urlDetail)
     .then(res => res.json())
     .then(data => setDentistDetail(data))
  },[])
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

if(!dentistDetail){
  return(
    <p>loading details ...</p>
  )
} else {
  return (
    <div className='detail'>
      <h3>Detail Dentist id </h3>
      <h1>{dentistDetail.name}</h1>
      <ul className='detailData'>
        <h3>dr data:</h3>
        <li>{dentistDetail.email}</li>
        <li>{dentistDetail.phone}</li>
        <li>{dentistDetail.website}</li>
      </ul> 
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}
}

export default Detail