/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom'

function NavItem ({ children, to, activeStyle }) {
  return (
    <NavLink
      to={to}
      className={ ({ isActive }) => isActive ? activeStyle : undefined }
    >
      {children}
    </NavLink>
  )
}

export default NavItem
