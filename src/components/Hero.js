import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p style={{ letterSpacing: '3px', fontSize: '0.8rem', marginBottom: '10px' }}>
          — KENSTYLE COLLECTION 2026
        </p>
        <h1 className={styles.title}>Classe par nature, Fun par choix.</h1>
        <p className={styles.subtitle}>
          Plus qu'un vêtement — chaque pièce est une mémoire, 
          un instant de grâce qui attend de se révéler sur vous.
        </p>
        <Link href="/collections">
          <button className={styles.button}>Trouver votre style</button>
        </Link>
      </div>
    </section>
  );
}