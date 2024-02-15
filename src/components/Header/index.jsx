"use client";

import Link from 'next/link'
import styles from './Header.module.css'
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname(); 
  const navItems = [
    {
      name: "Clubs",
      href: "/clubs"
    },
    {
      name: "Community Chat",
      href: "/chat"
    },
    {
      name: "Events",
      href: "/events"
    },
    {
      name: "Notices",
      href: "/notices"
    },
    {
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
              <Link href={item.href} className={`${styles.nav} ${(item.href==pathname)?styles.active_nav:''}`}>{item.name}</Link>
          ))}
        </div>
    </nav>
  )
}

export default Header