import React, { useContext } from 'react'
import { Link, Routes } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {theme, toggleTheme} = useContext(ContextGlobal)

  return (
    <nav className='navBar' id={theme === 'light' ? 'navBarLight' : 'navBarDark'}>
      <div className='navBarRoutes'>
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/detail/:id"><h3>Detail</h3></Link>
        <Link to="/favs"><h3>Favs</h3></Link>
        <Link to="/contact"><h3>Contact</h3></Link>
      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className='toggleThemeButton' onClick={toggleTheme}>DARK/LIGHT</button>
    </nav>
  )
}

export default Navbar