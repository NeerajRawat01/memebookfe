import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import Menu from './Menu'
import Menu2 from './Menu2'

const NavBar = () => {
  const [isMenu, setIsMenu] = useState < boolean >(false)

  function handleBurgerClick() {
    setIsMenu((prevIsMenu: boolean) => {
      return !prevIsMenu
    })
  }

  return (
    <nav className='bg-blue-500 text-white relative h-16 flex items-centers sm:h-20'>
      <div className='w-11/12 mx-auto flex items-center sm:hidden'>
        <RxHamburgerMenu onClick={handleBurgerClick} className='font-semibold text-2xl cursor-pointer' />
        {isMenu && <Menu onCrossClicked={handleBurgerClick} />}
      </div>
      <div className='hidden sm:flex sm:items-center sm:w-11/12 sm:mx-auto'>
          <Menu2 />
      </div>
    </nav>
  )
}

export default NavBar
