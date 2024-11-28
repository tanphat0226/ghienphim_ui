import { Bars4Icon } from '@heroicons/react/24/outline'
import Logo from './Logo'
import Navbar from './Navbar'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <header className='bg-zinc-800'>
      <div className='flex w-full items-center justify-between px-2 py-2 md:mx-auto xl:max-w-screen-xl'>
        <Logo />
        <Navbar />

        <div className='flex items-center justify-between gap-2'>
          <SearchBar />

          <Bars4Icon className='h-8 w-8 text-white xl:hidden' />
          {/* <div className='flex justify-between'>
            <button className='login-btn'>Login</button>
            <button className='signup-btn'>Sign Up</button>
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header
