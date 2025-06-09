import HomePage from './homePage.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Servey from './servey.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/servey' element={<Servey/>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
