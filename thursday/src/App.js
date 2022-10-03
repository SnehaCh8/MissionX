import React from 'react';
import Sidebar from './components/TeacherSidebar.js';
// import helprequest from './components/HelpRequest.js';
import TeacherNavbar from './components/DashboardHeader.js';
import HelpRequest from './components/HelpRequest.js';


function App() {
  return (
    <div className="App">

    <div className="Dash-header">
        <TeacherNavbar />

       </div>

    <div className="Teacher-Sidebar">
        <Sidebar />
      </div>

      <div className="Help-Request">
        <HelpRequest />
      </div>

    </div>
 
  );
}

export default App;