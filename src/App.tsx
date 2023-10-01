import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authpage from './components/Authpage';
import ProjectPage from './components/Projectpage';
import DetailsPage from './components/Detailpage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Authpage/>}/>
      <Route path='/home' element={<ProjectPage/>}/>
      <Route path='/detail/:projectid' element={<DetailsPage/>}/>
    </Routes>
  );
}

export default App;
