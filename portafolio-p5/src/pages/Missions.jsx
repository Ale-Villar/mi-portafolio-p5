import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Missions.css';

const projects = [
  {
    id: 1,
    title: "SISTEMA DE GESTIÓN: CHURRERÍA",
    role: "Full-Stack Developer",
    description: "Desarrollo integral del sistema. Interfaz de ventas, integración con base de datos y configuración de soporte offline para garantizar operatividad constante.",
    tech: ["React", "Django", "PostgreSQL"],
  }
];

export const Missions = () => {
  const navigate = useNavigate();

  return (
    <div className="missions-container">
      {/* Botón para volver al menú */}
      <motion.button 
        className="back-btn"
        onClick={() => navigate('/')}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        &lt; ESCAPE
      </motion.button>

      <motion.h1 
        className="missions-title"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        TARGETS ACQUIRED
      </motion.h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="calling-card"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: 'spring' }}
            whileHover={{ scale: 1.02, rotate: 1 }}
          >
            <div className="card-header">
              <h2>{project.title}</h2>
              <span className="role">{project.role}</span>
            </div>
            <div className="card-body">
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};