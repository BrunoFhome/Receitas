import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/home.js';
import Incluir from './pages/incluir/incluir.js';
import Header from './components/Header/header.js';
import Contato from './pages/Contact.js'


function RoutesApp() {
    return(
        <BrowserRouter>

            <Header/>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/incluir" element={<Incluir/>} /> 
                <Route path="/contato" element={<Contato/>} />
    
            </Routes>

        
        </BrowserRouter>
    );
}

export default RoutesApp;