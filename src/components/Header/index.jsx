import Link from 'next/link'
import styles from './Header.module.css'

function Header() {
  return (
    <nav className="w-full flex justify-between">
        <Link href='/' className="my-auto text-white pl-12 text-2xl">
          <h2 className="font-mono text-4xl">JNU Sayz</h2>
        </Link>

        <div className={`${styles.nav_bar} flex mr-3`}>
            <Link href='/clubs' className={`${styles.nav}`}>Clubs</Link>
            <Link href='/chat' className={`${styles.nav}`}>Community Chat</Link>
            <Link href='/events' className={`${styles.nav}`}>Events</Link>
            <Link href='/notices' className={`${styles.nav}`}>Notices</Link>
            <Link href='/about' className={`${styles.nav}`}>About Us</Link>
        </div>
    </nav>
  )
}

export default Header