import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/home';

export const Routing = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/orders" element={<HomePage />} />
            <Route path="/users" element={<HomePage />} />
        </Routes>
    </Router>
);
