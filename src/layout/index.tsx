import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import { LayoutContainer } from './styles'

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}

export default Layout
