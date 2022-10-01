import React from "react";
import './TeacherSidebar.css';
import ProgressTracker from "../images/progressTrackerSelected.png";
import StudentProfiles from "../images/helpRequestsSelected.png";
import HelpRequest from "../images/studentProfilesSelected.png";
import ProjectSubmissions from "../images/projectSubmissionsSelected.png";
import ProjectLibrary from "../images/projectLibrarySelected.png";

function Sidebar() {
    return (
        <div className="Sidebar">
        

            <div className="Sidebar-items">

                <div className="Sidebar-Progress">
                <img src={ProgressTracker} width="25px" height="25px" alt="" />
                    <span className="sidebar-text">PROGRESS TRACKER</span>
                </div>

                <div className="Sidebar-Progress">
                    <img src={StudentProfiles} width="25px" height="25px" alt="" />
                    <span className="sidebar-text">STUDENT PROFILES</span>
                </div>

                <div className="Sidebar-Progress">
                    <img src={HelpRequest} width="25px" height="25px" alt="" />
                    <span className="sidebar-text">HELP REQUEST</span>
                </div>

                <div className="Sidebar-Progress">
                    <img src={ProjectSubmissions} width="25px" height="25px" alt="" />
                    <span className="sidebar-text">PROJECT SUBMISSIONS</span>
                </div>

                <div className="Sidebar-Progress">
                    <img src={ProjectLibrary} width="25px" height="25px" alt="" />
                    <span className="sidebar-text">PROJECT LIBRARY</span>
                </div>


                </div>
            </div>
    );
}
export default Sidebar;
