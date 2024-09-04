import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/home/Home';
import Footer from './components/footer/Footer';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path='frontend'></Route>
                {/* <Route path="/servicios" element={<Servicios />} />
                <Route path="/habilidades" element={<Habilidades />} />
                <Route path="/trabajos" element={<Trabajos />} />
                <Route path="/contacto" element={<Contacto />} /> */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
