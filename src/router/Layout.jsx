import React from 'react'

import App from '../App'
import { Outlet } from 'react-router-dom'
// import NavBarHome from '../components/navBarHome/NavBarHome'

//  import Home from '../views/home/Home'
// import SlideCardHome from '../components/slideCardsHome/SlideCardHome'
// import BlueCardHome from '../components/blueCardHome/BlueCardHome'



const Layout = () => {


      return (
    <>
     
     <App><Outlet></Outlet></App>
     
    </>
    )
  
}

export default Layout 