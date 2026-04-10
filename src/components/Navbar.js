'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'ACCUEIL', href: '/' },
    { name: 'COLLECTIONS', href: '/collections' },
    { name: 'SERVICES', href: '/services' },
    { name: 'À PROPOS', href: '/a-propos' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image src="/logo.png" alt="KenStyle" width={130} height={45} priority />
        </Link>
      </div>
      
      <ul className={styles.menu}>
        {navLinks.map((link) => {
          // Verifier si on est sur la page pour activer le style
          const isActive = pathname === link.href;
          
          return (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={isActive ? styles.activeLink : styles.link}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className={styles.actions}>
        <Link href="/contact" className={styles.cta}>
          Prendre RENDEZ-VOUS
        </Link>
      </div>
    </nav>
  );
}