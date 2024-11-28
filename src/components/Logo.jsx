import logo from '../assets/logo_drark_mode.png'

const Logo = () => {
  return (
    <div className='w-28 h-10 md:w-32'>
      <img className='w-full h-full object-cover' src={logo} alt='logo' />
    </div>
  )
}

export default Logo
