import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'

import Logos from './pages/Logos.jsx'
import Publicidades from './pages/Publicidades.jsx'
import Ilustraciones from './pages/Ilustraciones.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}>
        </Route>
        <Route path='proyectos'>
          <Route path='logos' element={<Logos/>}/>
          <Route path='publicidades' element={<Publicidades/>}/>
          <Route path='ilustraciones' element={<Ilustraciones/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
