
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import "bootstrap/dist/css/bootstrap.min.css";

import About from './Components/About';
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Project from './Components/Project'
import Layout from './Components/Layout';
import NotFound from './Components/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path='/' element={<Layout />}>
                    <Route path='/home' element={<About />} />
                    <Route path='/experience' element={<Experience />} />
                    <Route path='/project' element={<Project />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
