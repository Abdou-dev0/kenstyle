import styles from './Services.module.css';

const services = [
  {
    title: "Création Sur-Mesure",
    description: "Conception de pièces uniques pour vos événements : mariages, galas et cérémonies. Un accompagnement personnalisé du choix du tissu à la coupe finale.",
    icon: "✂️"
  },
  {
    title: "Modélisme & Patronnage",
    description: "Étude technique de vos modèles et création de patrons précis. Une expertise pour transformer un dessin en un vêtement parfaitement structuré.",
    icon: "📐"
  },
  {
    title: "Collection Prêt-à-Porter",
    description: "Découvrez nos modèles exclusifs disponibles en tailles standards, alliant confort quotidien et élégance sénégalaise.",
    icon: "👗"
  }
];

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <span className={styles.label}>Expertise</span>
        <h1 className={styles.title}>Nos Services</h1>
        <p className={styles.subtitle}>Le savoir-faire d'une styliste modéliste au service de votre silhouette.</p>
      </header>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{service.icon}</div>
            <h2 className={styles.cardTitle}>{service.title}</h2>
            <p className={styles.cardDescription}>{service.description}</p>
            <div className={styles.divider}></div>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <h3>Un projet particulier ?</h3>
        <p>Parlons-en ensemble pour créer la pièce de vos rêves.</p>
        <a href="/contact" className={styles.ctaBtn}>Prendre Rendez-vous</a>
      </div>
    </main>
  );
}