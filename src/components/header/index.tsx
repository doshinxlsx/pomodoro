import React, { useContext } from 'react'
import {
  HeaderContainer,
  HeaderLeftContainer,
  HeaderRightContainer,
  Logo,
  ToggleTheme,
} from './styles'
import { NavLink } from 'react-router-dom'
import { Timer, Scroll, Sun, Moon, Gear } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { ThemeContext } from '../../App'

const Header = () => {
  const { toggleTheme, currentTheme } = useContext(ThemeContext)

  const handleToggleTheme = () => {
    toggleTheme()
  }

  return (
    <HeaderContainer>
      <HeaderLeftContainer>
        <Logo src={logo} />
        {currentTheme === 'dark' ? (
          <ToggleTheme onClick={handleToggleTheme}>
            <Sun size={24} />
          </ToggleTheme>
        ) : (
          <ToggleTheme onClick={handleToggleTheme}>
            <Moon size={24} />
          </ToggleTheme>
        )}
      </HeaderLeftContainer>
      <HeaderRightContainer>
        <nav>
          <NavLink to='/' title='Timer'>
            <Timer size={24} />
          </NavLink>
          <NavLink to='/history' title='History'>
            <Scroll size={24} />
          </NavLink>
          <NavLink to='/settings' title='Settings'>
            <Gear size={24} />
          </NavLink>
        </nav>
      </HeaderRightContainer>
    </HeaderContainer>
  )
}

export default Header
