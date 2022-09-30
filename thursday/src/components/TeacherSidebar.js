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
                <img src={ProgressTracker} alt="" />
                    <span className="sidebar-text">PROGRESS TRACKER</span>
                </div>

                {/* <StudentProfiles className="sidebar-icon" />
                <span className="sidebar-text">STUDENT PROFILES</span>

                <HelpRequest className="sidebar-icon" />
                <span className="sidebar-text">HELP REQUEST</span>

                <ProjectSubmissions className="sidebar-icon" />
                <span className="sidebar-text">PROJECT SUBMISSIONS</span>

                <ProjectLibrary className="sidebar-icon" />
                <span className="sidebar-text">PROJECT LIBRARY</span> */}

                </div>
            </div>
    );
}
export default Sidebar;
