"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Fonction pour vérifier si le lien est la page actuelle
  const isActive = (path) => pathname === path;

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/" onClick={closeMenu}>
          {/* Assure-toi que l'image est bien dans /public/kenstyle.png */}
          <Image src="/logo.png" alt="KenStyle Logo" width={140} height={50} priority />
        </Link>
      </div>

      {/* Bouton Burger */}
      <div className={`${styles.burger} ${isOpen ? styles.activeBurger : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu de Navigation */}
      <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <li>
          <Link href="/" className={isActive('/') ? styles.activeLink : styles.link} onClick={closeMenu}>
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/collections" className={isActive('/collections') ? styles.activeLink : styles.link} onClick={closeMenu}>
            Collections
          </Link>
        </li>
        <li>
          <Link href="/services" className={isActive('/services') ? styles.activeLink : styles.link} onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/a-propos" className={isActive('/a-propos') ? styles.activeLink : styles.link} onClick={closeMenu}>
            À Propos
          </Link>
        </li>
        <li>
          <Link href="/contact" className={isActive('/contact') ? styles.activeLink : styles.link} onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Bouton de Droite */}
      <div className={styles.actions}>
        <Link href="/contact" className={styles.cta}>Prendre RDV</Link>
      </div>
    </nav>
  );
};

export default Navbar;