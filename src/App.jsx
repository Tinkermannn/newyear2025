import React, { useState } from 'react';
import Navbar from './assets/component/Navbar/Navbar';
import NavbarUser from './assets/component/Navbar/NavbarUser';
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom"
import Footer from './assets/component/Footer/Footer';

export default function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/home" ? <Navbar/> : <NavbarUser/>}
      <Outlet />
      <Footer/>
    </>
  );
}
