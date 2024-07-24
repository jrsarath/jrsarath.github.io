import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './pages/Home';
import Aura from './pages/Aura';
import './assets/scss/app.scss'

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<></>}>
                <Route index element={<Home />} />
                <Route path="aura" element={<Aura />} />
                {/* <Route path="*" element={<NoMatch />} /> */}
            </Route>
        </Routes>
    )
}

export default App;
