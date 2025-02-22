import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Http from './pages/http/index';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Http />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
