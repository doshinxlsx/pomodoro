import React from 'react'
import { HeaderContainer, HeaderLeftContainer, HeaderRightContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeftContainer>
        <p>Logo</p> {/* TODO: Add logo */}
      </HeaderLeftContainer>
      <HeaderRightContainer>
        <NavLink to='/' title='Timer'>
          <Timer size={24} />
        </NavLink>
        <NavLink to='/history' title='History'>
          <Scroll size={24} />
        </NavLink>
      </HeaderRightContainer>
    </HeaderContainer>
  )
}

export default Header
