import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './MainMenu.css';

const menuItems = [
  { id: 'missions', label: 'MISSIONS (PROYECTOS)', color: 'var(--p5-red)', path: '/missions' },
  { id: 'skills', label: 'SKILLS (REACT, DJANGO, SQL)', color: 'var(--p5-black)', path: '/skills' },
  { id: 'profile', label: 'PHANTOM FILE (ALEJANDRO)', color: 'var(--p5-red)', path: '/profile' },
  { id: 'contact', label: 'INFILTRATION LOG (CONTACTO)', color: 'var(--p5-black)', path: '/contact' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { x: -300, opacity: 0, skewX: -20 },
  visible: { 
    x: 0, 
    opacity: 1, 
    skewX: -15,
    transition: { type: 'spring', stiffness: 120, damping: 10 } 
  }
};

export const MainMenu = () => {
  const navigate = useNavigate();

  const handleItemClick = (path) => {
    navigate(path); // Ahora sí, el botón funciona
  };

  return (
    <div className="p5-menu-container">
      <div className="p5-bg-stripe"></div>
      
      <motion.ul 
        className="p5-menu-list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {menuItems.map((item) => (
          <motion.li
            key={item.id}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.08, 
              x: 20,
              backgroundColor: item.color === 'var(--p5-black)' ? 'var(--p5-red)' : 'var(--p5-white)',
              color: item.color === 'var(--p5-black)' ? 'var(--p5-white)' : 'var(--p5-black)',
              transition: { duration: 0.1 }
            }}
            onClick={() => handleItemClick(item.path)}
            className="p5-menu-item"
            style={{ backgroundColor: item.color }}
          >
            <span className="p5-menu-text">{item.label}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};