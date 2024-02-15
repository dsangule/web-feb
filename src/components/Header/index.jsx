"use client";

import Link from 'next/link'
import styles from './Header.module.css'
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname(); 
  const navItems = [
    {
      key: 1,
      name: "Clubs",
      href: "/clubs"
    },
    {
      key: 2,
      name: "Community Chat",
      href: "/chat"
    },
    {
      key: 3,
      name: "Events",
      href: "/events"
    },
    {
      key: 4,
      name: "Notices",
      href: "/notices"
    },
    {
      key: 5,
      name: "About Us",
      href: "/about"
    },
  ]
  return (
    <nav className="w-full flex justify-between">
        <Link href='/' className="my-auto text-white pl-12 text-2xl">
          <h2 className="font-mono text-4xl">JNU Sayz</h2>
        </Link>

        <div className={`${styles.nav_bar} flex mr-3`}>
          {navItems.map(item=>(
              <Link key={item.key} href={item.href} className={`${styles.nav} ${(item.href==pathname)?styles.active_nav:''}`}>{item.name}</Link>
          ))}
        </div>
    </nav>
  )
}

export default Header