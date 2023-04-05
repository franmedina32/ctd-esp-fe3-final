import React, { useContext } from 'react'
import logo from "../images/DH.png"
import icofb from "../images/ico-facebook.png"
import icoig from "../images/ico-instagram.png"
import icott from "../images/ico-tiktok.png"
import icowp from "../images/ico-whatsapp.png"
import { ContextGlobal } from './utils/global.context'
const Footer = () => {

  const {theme} = useContext(ContextGlobal)

  return (
    <footer id={theme === 'light' ? 'navBarLight' : 'navBarDark'}>
      <p id={theme === 'light' ? 'PBLight' : 'PBDark'}>Powered by</p>
      <img  id='logoDH' src={logo} alt='DH-logo' />
    </footer>
  )
}

export default Footer
