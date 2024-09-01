import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contato from './Contato';
import MinhaRotina from './MinhaRotina';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MinhaRotina />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </Router>
    );
}

export default App;
