import React from 'react'
import { Header, Footer } from '../components';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default SharedLayout;