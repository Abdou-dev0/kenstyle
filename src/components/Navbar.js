"use client"; // Obligatoire pour utiliser useState
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css'; // Adapte selon ton nom de fichier

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/kenstyle.png" alt="KenStyle Logo" width={120} height={40} />
        </Link>
      </div>

      {/* Le Menu Burger (les 3 barres) */}
      <div className={`${styles.burger} ${isOpen ? styles.activeBurger : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Ta liste de liens */}
      <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <li><Link href="/" className={styles.link} onClick={() => setIsOpen(false)}>Accueil</Link></li>
        <li><Link href="/collections" className={styles.link} onClick={() => setIsOpen(false)}>Collections</Link></li>
        <li><Link href="/a-propos" className={styles.link} onClick={() => setIsOpen(false)}>À Propos</Link></li>
        <li><Link href="/contact" className={styles.link} onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>

      <div className={styles.actions}>
        <Link href="/contact" className={styles.cta}>Prendre RDV</Link>
      </div>
    </nav>
  );
};

export default Navbar;