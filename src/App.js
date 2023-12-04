import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Form from './pages/Form';
import ModifyCheck from './pages/ModifyCheck';

function App() {
  return (<>
  <Dashboard></Dashboard>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Dashboard} />
        <Route path="/form" component={Form} />
        <Route path="/modify" component={ModifyCheck} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
