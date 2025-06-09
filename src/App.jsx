import HomePage from './homePage.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Servey from './servey.jsx';
import DashBoard from './dashBoard.jsx';
import Diary from './diary.jsx';
import Missions from './missions.jsx';
import Ranking from './ranking.jsx';
import ServicePackage from './ServicePackage.jsx'
import Coach from './coach.jsx';
import Achievement from './achievement.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/servey' element={<Servey/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='dashboard' element={<DashBoard/>} />
        <Route path='diary' element={<Diary/>} />
        <Route path='missions' element={<Missions/>} />
        <Route path='ranking' element={<Ranking/>} />
        <Route path='achievement' element={<Achievement/>} />
        <Route path='service-package' element={<ServicePackage/>} />
        <Route path='coach' element={<Coach/>} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
