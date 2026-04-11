import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Colonne 1 : La Marque */}
        <div className={styles.brand}>
          <h2 className={styles.logo}>KENSTYLE</h2>
          <p>Classe par nature, Fun par choix.</p>
          <p className={styles.phone}>+221 76 298 55 03</p>
          <p className={styles.phone}>+221 77 693 17 24</p>
          <p className={styles.phone}>+221 33 905 54 59</p>
        </div>

        {/* Colonne 2 : Liens rapides */}
        <div className={styles.links}>
          <h3>NAVIGATION</h3>
          <Link href="/">Accueil</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/services">Services</Link>
          <Link href="/a-propos">A Propos</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className={styles.contact}>
          <h3>SUIVEZ-NOUS</h3>
          <a href="https://www.instagram.com/ken_barhamm/" target="_blank">Instagram</a>
          <a href="https://www.snapchat.com/@kenbarham05" target="_blank">Snapchat</a>
          <a href="https://www.tiktok.com/@kenbarham" target="_blank">Tik tok</a>
          <a href="https://www.facebook.com/kencas.ndiay" target="_blank">Facebook</a>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>© 2026 KENSTYLE. TOUS DROITS RÉSERVÉS.</p>
        <p className={styles.dev}>Développé par Abdou Khadre Alwaly Ndiaye</p>
      </div>
    </footer>
  );
}