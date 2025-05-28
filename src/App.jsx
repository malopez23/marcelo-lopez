import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<div>Perfil</div>} />
          <Route path="/resume" element={<div>Currículo</div>} />
          <Route path="/projects" element={<div>Projetos</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;