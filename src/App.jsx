import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/App.css';
import Homepage from './pages/Homepage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
