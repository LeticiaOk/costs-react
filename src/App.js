import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Company from './Components/Pages/Company';
import NewProject from './Components/Pages/NewProject';
import Container from './Components/layout/Container';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/contact"}>Contato</Link>
          <Link to={"/company"}>Empresa</Link>
          <Link to={"/newproject"}>Novo Projeto</Link>
        </div>
        <Container customClass="min_height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newproject" element={<NewProject />} />
          </Routes>
        </Container>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
