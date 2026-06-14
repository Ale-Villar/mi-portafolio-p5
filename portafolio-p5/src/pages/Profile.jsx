import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import miFoto from './foto.jpeg';
import './Profile.css';

export const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <motion.button 
        className="back-btn"
        onClick={() => navigate('/')}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        &lt; ESCAPE
      </motion.button>

      <div className="profile-content">
        <motion.div 
          className="character-art-placeholder"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
        <div className="art-box">
            {/* Insertamos la imagen acá */}
            <img src={miFoto} alt="Alejandro - Phantom File" className="profile-img" />
          </div>
        </motion.div>

        <motion.div 
          className="stats-panel"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <h1 className="profile-title">CONFIDENTIAL FILE</h1>
          <ul className="stats-list">
            <li><strong>CODENAME:</strong> FULL-STACK</li>
            <li><strong>BASE:</strong> ARGENTINA</li>
            <li><strong>CLASS:</strong> DEVELOPER / STUDENT</li>
          </ul>
          <div className="bio-box">
            <p>Completando mis prácticas profesionalizantes y puliendo mi arsenal para el próximo ciclo lectivo. Especializado en construir sistemas lógicos y robustos utilizando tecnologías como React, Django y PostgreSQL.</p>
            <p>Fuera del Metaverso, aplico la misma precisión técnica en la pastelería, y me sumerjo en el lore de juegos de estrategia y universos grimdark.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};