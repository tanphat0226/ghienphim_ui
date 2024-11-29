import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router'

const NavBarItem = ({ item, isOpen, onOpenSubMenu }) => {
  const navbarItemClasses = `${item?.subMenu ? 'relative' : ''} px-3 cursor-pointer group`

  return (
    <li className={navbarItemClasses} onClick={() => onOpenSubMenu(item.id)}>
      <Link to={item.path} className='flex items-center group-hover:text-coral-400'>
        <span>{item.title}</span>
        {item?.path === null && <ChevronDownIcon className='ml-1 h-4 w-4' />}
      </Link>

      {item?.subMenu && isOpen && (
        <ul className='absolute left-0 mt-4 grid w-[450px] origin-top grid-cols-3 gap-2 rounded-sm bg-slate-800 p-2'>
          {item.subMenu.map((subItem) => (
            <li
              key={subItem._id}
              className='block w-full cursor-pointer rounded-sm p-1 text-center hover:bg-white hover:text-coral-400'
            >
              <Link to={`/${item.id === 'theloai' ? 'the-loai' : 'quoc-gia'}/${subItem?.slug}`}>
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default NavBarItem
