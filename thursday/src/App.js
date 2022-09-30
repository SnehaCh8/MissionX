import React from 'react';
import Sidebar from './components/TeacherSidebar.js';
// import helprequest from './components/HelpRequest.js';
import TeacherNavbar from './DashboardHeader.js';


function App() {
  return (
    <div className="Dash-header">
      <TeacherNavbar />

    <div className="App">
        <Sidebar />
      </div>

  </div>
  );
}

export default App;