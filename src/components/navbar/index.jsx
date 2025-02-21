import { RocketLaunchIcon } from '@heroicons/react/24/solid'

import NavItem from "../navitem"

function NavBar() {
  const activeStyle = "underline underline-offset-4"

  return (
    <nav className="flex justify-between items-center bg-white fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li>
          <NavItem to="/" activeStyle={activeStyle}>
            Home
          </NavItem>
        </li>
        <span>|</span>
        <li>
          <NavItem to="/others" activeStyle={activeStyle}>
            Others
          </NavItem>
        </li>
      </ul>

      <RocketLaunchIcon className='h-10 w-10' />
    </nav>
  )
}

export default NavBar
