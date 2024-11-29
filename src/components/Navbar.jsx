import { useCallback, useEffect, useState } from 'react'
import { categoriesApi, countriesApi } from '../services/apiCategories'
import NavBarItem from './NavBarItem'
import useOutSideCLick from '../hooks/useOutSideClick'

const MENU_ITEMS = [
  { id: 'trangchu', title: 'Trang chủ', path: '/' },
  { id: 'theloai', title: 'Thể loại', path: null },
  { id: 'quocgia', title: 'Quốc gia', path: null },
  { id: 'phimbo', title: 'Phim bộ', path: '/phim-bo' },
  { id: 'phimle', title: 'Phim lẻ', path: '/phim-le' },
  { id: 'tvshows', title: 'TV Shows', path: '/tv-shows' }
]

const Navbar = () => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, countriesRes] = await Promise.all([categoriesApi, countriesApi])
        MENU_ITEMS.find((item) => item.id === 'theloai').subMenu = categoriesRes.data.items
        MENU_ITEMS.find((item) => item.id === 'quocgia').subMenu = countriesRes.data.items
      } catch (error) {
        console.error('Failed to fetch data', error)
      }
    }

    fetchData()
  }, [])

  const handleOpenSubMenu = useCallback((id) => {
    setIsOpenSubMenu((prevId) => (prevId === id ? null : id))
  }, [])

  const ref = useOutSideCLick(handleOpenSubMenu)

  return (
    <nav className='hidden xl:block'>
      <ul className='flex items-center py-2 text-base text-white' ref={ref}>
        {MENU_ITEMS.map((item) => (
          <NavBarItem
            key={item.title}
            item={item}
            isOpen={isOpenSubMenu === item.id}
            onOpenSubMenu={handleOpenSubMenu}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
