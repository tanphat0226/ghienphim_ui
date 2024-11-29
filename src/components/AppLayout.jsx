import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

const AppLayout = () => {
  return (
    <div>
      <Header />

      <main className='bg-slate-700'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default AppLayout
