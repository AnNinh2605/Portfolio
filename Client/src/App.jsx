
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import "bootstrap/dist/css/bootstrap.min.css";

import About from './Components/About';
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Project from './Components/Project'
import Layout from './Components/Layout';
import NotFound from './Components/NotFound';

function App() {
    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    };

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<About />} />
                    <Route path='experience' element={<Experience />} />
                    <Route path='project' element={<Project />} />
                    <Route path='contact' element={<Contact />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
