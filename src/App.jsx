import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MatrixEntry from './components/MatrixEntry';
import MatrixVideo from './components/MatrixVideo';
import MatrixResult from './components/MatrixResult';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MatrixEntry />} />
        <Route path="/video" element={<MatrixVideo />} />
        <Route path="/result" element={<MatrixResult />} />
      </Routes>
    </Router>
  );
};

export default App;
