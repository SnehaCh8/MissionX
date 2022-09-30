import React from 'react';
import Sidebar from './components/TeacherSidebar.js';
// import helprequest from './components/HelpRequest.js';
import TeacherNavbar from './components/DashboardHeader.js';


function App() {
  return (
    <div className="App">

    <div className="Dash-header">
      <TeacherNavbar />
       </div>

    <div className="test">
        <Sidebar />
      </div>

    </div>
 
  );
}

export default App;