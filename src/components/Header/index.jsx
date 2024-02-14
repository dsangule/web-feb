import Link from 'next/link'
import styles from './Header.module.css'

function Header() {
  return (
    <nav className="bg-transparent w-full flex justify-between">
        <Link href='/' className="my-auto text-white pl-12 text-2xl">
          <h2>JNU Sayz</h2>
        </Link>

        <div className={`${styles.nav_bar} flex`}>
            <Link href='/' className={`p-4 font-mono text-white hover:text-[#1e2020]`}>Community Chat</Link>
            <Link href='/' className={`p-4 font-mono text-white hover:text-[#1e2020]`}>Clubs</Link>
            <Link href='/' className={`p-4 font-mono text-white hover:text-[#1e2020]`}>Events</Link>
            <Link href='/' className={`p-4 font-mono text-white hover:text-[#1e2020]`}>Notices</Link>
            <Link href='/' className={`p-4 font-mono text-white hover:text-[#1e2020]`}>About Us</Link>
        </div>
    </nav>
  )
}

export default Header