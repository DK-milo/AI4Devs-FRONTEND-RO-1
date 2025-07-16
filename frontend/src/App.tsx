import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';

// Importar componentes existentes
import AddCandidateForm from './components/AddCandidateForm';
import Positions from './components/Positions';

// Importar página kanban (se creará en el siguiente paso)
import PositionKanbanPage from './components/PositionKanban/PositionKanbanPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
          <Container>
            <Navbar.Brand as={Link} to="/">LTI Talent Tracking</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/positions">Posiciones</Nav.Link>
                <Nav.Link as={Link} to="/add-candidate">Añadir Candidato</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
          <Routes>
            <Route path="/" element={
              <div className="text-center">
                <h1>Bienvenido a LTI Talent Tracking System</h1>
                <p>Gestiona candidatos y posiciones de trabajo de manera eficiente</p>
              </div>
            } />
            <Route path="/positions" element={<Positions />} />
            <Route path="/add-candidate" element={<AddCandidateForm />} />
            <Route path="/positions/:id/process" element={<PositionKanbanPage />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
