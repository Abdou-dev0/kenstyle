'use client';
import { useState } from 'react';
import { MODELS } from '../../data/models';
import styles from './Collections.module.css';
import Image from 'next/image';

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedModel, setSelectedModel] = useState(null);

  // Récupérer les catégories sans doublons
  const categories = ['Tous', ...new Set(MODELS.map(m => m.category))];

  // Filtrer la liste selon le bouton cliqué
  const filteredModels = activeCategory === 'Tous' 
    ? MODELS 
    : MODELS.filter(m => m.category === activeCategory);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Nos Collections</h1>
        
        <div className={styles.filterBar}>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? styles.activeBtn : styles.filterBtn}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {filteredModels.map((model) => (
          <div 
            key={model.id} 
            className={styles.card} 
            onClick={() => setSelectedModel(model)}
          >
            <div className={styles.imageWrapper}>
              <Image src={model.image} alt={model.title} fill className={styles.img} />
            </div>
            <div className={styles.info}>
              <span className={styles.catLabel}>{model.category}</span>
              <h3>{model.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Fenêtre qui s'ouvre au clic sur une photo */}
      {selectedModel && (
        <div className={styles.modalOverlay} onClick={() => setSelectedModel(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedModel(null)}>×</button>
            
            <div className={styles.modalBody}>
              <div className={styles.modalImage}>
                <Image src={selectedModel.image} alt={selectedModel.title} fill className={styles.img} />
              </div>
              <div className={styles.modalText}>
                <span className={styles.catLabel}>{selectedModel.category}</span>
                <h2>{selectedModel.title}</h2>
                <p>{selectedModel.description}</p>
                <a href="/contact" className={styles.orderBtn}>Commander ce modèle</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}