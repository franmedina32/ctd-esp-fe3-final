import React, { useContext, useEffect } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

 
  const{data} = useContext(ContextGlobal)
  //console.log(data)

  

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        { data ? data.map(dentist => <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}></Card>) : (<p>loading...</p>)}
      </div>
    </main>
  )
}

export default Home