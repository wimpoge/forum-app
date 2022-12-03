/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, NavContainer, NavLink, NavLinks } from './Nav.styles'

function Nav ({ logout, authUser }) {
  return (
    <>
      <NavContainer>
        <h1>FORUM APP</h1>
        <NavLinks>
          <NavLink to='/'>
            Threads
          </NavLink>
          <NavLink to='/leaderboards'>
            Leaderboards
          </NavLink>
          <NavLink to='/threads'>
            Create Threads
          </NavLink>
          <img src={authUser.avatar} alt={authUser.id} title={authUser.name} />
          <Button type='button' onClick={logout}>Logout</Button>
        </NavLinks>
      </NavContainer>
      <Outlet />
    </>
  )
}

Nav.propTypes = {
  logout: PropTypes.func.isRequired
}

export default Nav
