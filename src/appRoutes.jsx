import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Http from '../src/pages/http/index';

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
