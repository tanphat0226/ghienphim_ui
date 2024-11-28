import { ChevronDownIcon } from '@heroicons/react/16/solid'

const Navbar = () => {
  return (
    <nav className='hidden xl:block'>
      <ul className='flex items-center py-2 text-base text-white'>
        <li className='px-3'>
          <a href='#home'>Trang chủ</a>
        </li>
        <li className='px-3'>
          <a href='#about' className='flex items-center'>
            <span>Thể loại</span> <ChevronDownIcon className='ml-[2px] h-4 w-4' />
          </a>
        </li>
        <li className='px-3'>
          <a href='#services' className='flex items-center'>
            <span> Quốc gia</span> <ChevronDownIcon className='ml-[2px] h-4 w-4' />
          </a>
        </li>
        <li className='px-3'>
          <a href='#contact'>Phim bộ</a>
        </li>
        <li className='px-3'>
          <a href='#contact'>Phim lẻ</a>
        </li>
        <li className='px-3'>
          <a href='#contact'>Phim chiếu rạp</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
