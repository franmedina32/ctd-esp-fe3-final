import React, { useEffect, useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [contacto, setContacto] = useState({
    nombre: "",
    email: ""
  })

  const [validation, setValidaton] = useState('')
  const [mensaje, setMensaje] = useState('completar campos con informacion adecuada')

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (event) => {
    event.preventDefault()
    if (contacto.nombre.length>5 && emailRegex.test(contacto.email)){
      setValidaton(true)
    }
    else {
      setValidaton(false)
    }
  }

  useEffect(()=>{
    if(validation===true){
      setMensaje(`Gracias ${contacto.nombre}, te contactaremos cuando antes vía mail`)
    }
    else if(validation===false){
      setMensaje("Por favor verifique su información nuevamente")
    }
  })


  

 


  return (
    <div>
      <form>
        <label>Nombre Completo</label>
        <input type="text" placeholder="nombre apellido" onChange={(e) => setContacto({...contacto, nombre: e.target.value})}></input>
        <label>Email</label>
        <input type="email" placeholder="usuario@mail.com" onChange={(e) => setContacto({...contacto, email: e.target.value})}></input>
        <button onClick={handleSubmit}>ENVIAR</button>
      </form>
      {<p>{mensaje}</p>}
    </div>
  );
};

export default Form;
