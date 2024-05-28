import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from './Components/Layout';
import NotFound from "./Components/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
