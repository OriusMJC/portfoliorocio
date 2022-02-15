import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Scrollbar from './components/scrollbar.jsx'
import Navbar from './components/navbar.jsx'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Scrollbar></Scrollbar>
      <Routes>
        <Route path='/' element={<Homepage/>}>
        </Route>
        <Route path='/#proyectos/:id' element={<Homepage/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
