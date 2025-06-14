import HomePage from './homePage.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Survey from './survey.jsx';
import DashBoard from './dashBoard.jsx';
import Diary from './diary.jsx';
import Missions from './missions.jsx';
import Ranking from './ranking.jsx';
import Coach from './coach.jsx';
import Achievement from './achievement.jsx';
import ServicePackage from './ServicePackage.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/survey' element={<Survey/>}/>
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
