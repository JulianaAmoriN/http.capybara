import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Http from './pages/http/index';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Http />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
