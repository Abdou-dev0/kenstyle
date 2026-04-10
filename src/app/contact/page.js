'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ nom: '', email: '', type: 'Mariage', projet: '' });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const numero = "221762985503";
    const message = `Bonjour KenStyle, je suis ${formData.nom}.%0A%0AProjet: ${formData.type}%0A${formData.projet}`;
    window.open(`https://wa.me/${numero}?text=${message}`, '_blank');
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        
        {/* Section Gauche : Infos avec style */}
        <div className={styles.infoSide}>
          <h1 className={styles.title}>Contactez <br/><span>KenStyle</span></h1>
          <p className={styles.desc}>Pour toute demande de création ou de rendez-vous, contactez-moi directement.</p>
          
          <div className={styles.details}>
            <div className={styles.infoBlock}>
              <strong>ADRESSE</strong>
              <p>Mbour, Sénégal</p>
            </div>
            <div className={styles.infoBlock}>
              <strong>TÉLÉPHONE</strong>
              <p>+221 76 298 55 03</p>
              <p>+221 33 905 54 59</p>
            </div>
          </div>
        </div>

        {/* Section Droite : Formulaire épuré */}
        <form className={styles.form} onSubmit={handleWhatsApp}>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Votre Nom" required onChange={(e) => setFormData({...formData, nom: e.target.value})} />
          </div>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Votre Email" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </div>
          <select className={styles.select} onChange={(e) => setFormData({...formData, type: e.target.value})}>
            <option value="Mariage">Mariage</option>
            <option value="Traditionnel">Traditionnel</option>
            <option value="Prêt-à-porter">Prêt-à-porter</option>
            <option value="Gala">Soirée / Gala</option>
            <option value="Affaires ou Autres">Affaires ou Autres</option>
          </select>
          <textarea className={styles.textarea} placeholder="Parlez-nous de votre projet..." required onChange={(e) => setFormData({...formData, projet: e.target.value})}></textarea>
          
          <button type="submit" className={styles.submitBtn}>
            ENVOYER SUR WHATSAPP
          </button>
        </form>

      </div>
    </main>
  );
}