import Image from 'next/image';
import styles from './A-propos.module.css';

export default function APropos() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        
        
        <div className={styles.imageSide}>
          <div className={styles.imageFrame}>
            
            <Image 
              src="/ken.jpeg" 
              alt="Atelier KenStyle - Styliste Modéliste" 
              fill 
              className={styles.image}
              priority
            />
          </div>
        </div>

        
        <div className={styles.textSide}>
          <span className={styles.label}>La Maison</span>
          <h1 className={styles.title}>L'Art de la Coupe</h1>
          
          <div className={styles.content}>
            <p className={styles.intro}>
              Basée à <strong>Mbour</strong>, KenStyle est l’expression d’une vision où 
              le design rencontre la précision technique.
            </p>
            
            <p>
              En tant que <strong>Styliste Modéliste</strong>, KenStyle ne se contente pas d'imaginer 
              des silhouettes ; elle les construit. Le modélisme est le cœur de notre métier : 
              chaque patron est une architecture de papier destinée à épouser parfaitement vos formes.
            </p>

            <p>
              Nous sélectionnons les matières les plus nobles pour donner vie à des créations 
              qui marient l'héritage culturel sénégalais et l'élégance contemporaine. 
              Du premier croquis au montage final, l'exigence est notre seule mesure.
            </p>

            <div className={styles.signature}>
              <p>KenStyle — Classe par nature, Fun par choix.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}