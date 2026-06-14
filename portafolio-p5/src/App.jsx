import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainMenu } from './pages/MainMenu';
import { Missions } from './pages/Missions';
import { Profile } from './pages/Profile'; // Nueva
import { Contact } from './pages/Contact'; // Nueva

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;