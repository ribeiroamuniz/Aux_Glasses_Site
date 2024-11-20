import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './LoginScreen'; // Ajuste o caminho conforme necessário
import RegisterScreen from './RegisterScreen'; // Ajuste o caminho conforme necessário
import WelcomeScreen from './WelcomeScreen'; // Ajuste o caminho conforme necessário

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
