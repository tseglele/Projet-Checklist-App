import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Form from './pages/Form';
import ModifyCheck from './pages/ModifyCheck';


function App() {
 

  return (
    <>
  
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route path="/form" element={<Form />} />
          <Route path="/modify" element={<ModifyCheck/>} />
        </Routes>
 

  </>
  );
}

export default App;
