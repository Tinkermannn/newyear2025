import React, { useState } from 'react';
import Navbar from './assets/component/Navbar/Navbar';
import { Outlet, ScrollRestoration } from "react-router-dom"
import Footer from './assets/component/Footer/Footer';

export default function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}
