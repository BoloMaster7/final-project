import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home';
import NavBar from './components/views/Navbar/Navbar';
import Register from './components/pages/Register/Register';
import NotFound from './components/pages/NotFound/NotFoundPage';

function App() {
  return (
    <Container>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route element={<NotFound />} />
    </Routes>
    <Footer />
  </Container>
);
}

export default App;
