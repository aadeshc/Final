import React from 'react';
import logo from './logo.svg';
import './App.css';

import ProjectEditForm from './Editform'

//import ViewProjectReport from './ViewReportsPage';

import 'jquery'
const App: React.FC = () => {
  return (
   // <ViewProjectReport/> 
   <ProjectEditForm/>
  );
}

export default App;
