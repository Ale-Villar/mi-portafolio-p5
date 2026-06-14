import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

export const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-container">
      <motion.button 
        className="back-btn"
        onClick={() => navigate('/')}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        &lt; ESCAPE
      </motion.button>

      <motion.h1 
        className="contact-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        SEND CALLING CARD
      </motion.h1>

      <div className="links-grid">
        <motion.a href="#" className="contact-link bg-black" whileHover={{ scale: 1.05, rotate: -2 }}>
          GITHUB LOG
        </motion.a>
        <motion.a href="#" className="contact-link bg-white" whileHover={{ scale: 1.05, rotate: 2 }}>
          LINKEDIN INTEL
        </motion.a>
        <motion.a href="mailto:tuemail@gmail.com" className="contact-link bg-red" whileHover={{ scale: 1.05, rotate: -1 }}>
          DIRECT MESSAGE
        </motion.a>
      </div>
    </div>
  );
};