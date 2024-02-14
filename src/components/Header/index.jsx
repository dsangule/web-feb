import Link from 'next/link'
import styles from './Header.module.css'

function Header() {
  return (
    <nav className="bg-transparent w-full flex justify-between">
        <Link href='/' className="my-auto text-white pl-12 text-2xl">
          <h2>SoE</h2>
        </Link>

        <div className={`${styles.nav_bar} flex`}>
            <Link href='/' className='p-4 text-white hover:bg-[#005F73]'>Clubs</Link>
            <Link href='/' className='p-4 text-white hover:bg-[#1e2020]'>Community Chat</Link>
            <Link href='/' className='p-4 text-white hover:bg-[#005F73]'>Events</Link>
            <Link href='/' className='p-4 text-white hover:bg-[#005F73]'>Notices</Link>
            <Link href='/' className='p-4 text-white hover:bg-[#005F73]'>About Us</Link>
        </div>
    </nav>
  )
}

export default Header