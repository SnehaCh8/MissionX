import React from "react";
import './TeacherSidebar.css';
import JasminaSalvador from '../images/JasminaSalvador.png';
import ProgressTracker from "../images/progressTrackerSelected.png";
import StudentProfiles from "../images/helpRequestsSelected.png";
import HelpRequest from "../images/studentProfilesSelected.png";
import ProjectSubmissions from "../images/projectSubmissionsSelected.png";
import ProjectLibrary from "../images/projectLibrarySelected.png";
import ArrowLeft from "../images/arrowLeft.png";
import UserProfile from "../images/userprofile.png";
import Settings from "../images/settings.png";
import Logout from "../images/Logout.png";

function Sidebar() {
    return (
        <div className="Sidebar">
        

            <div className="Sidebar-items">

                <div className="jasmina">
                    <img src={JasminaSalvador} width="79px" alt="" />
            </div>

                <div className="Sidebar-Progress">
                <img src={ProgressTracker} className="sidebar-icon" alt="" />
                    <span className="sidebar-text">PROGRESS TRACKER</span>
                </div>

                <div className="Sidebar-Progress">
                    <img src={StudentProfiles} className="sidebar-icon" alt="" />
                    <span className="sidebar-text">STUDENT PROFILES</span>
                </div>

                <div className="Sidebar-Progress">
                    <img src={HelpRequest} className="sidebar-icon" alt="" />
                    <span className="sidebar-text">HELP REQUEST</span>
                </div>

                <div className="Sidebar-Progress">
                    <img src={ProjectSubmissions} className="sidebar-icon" alt="" />
                    <span className="sidebar-text">PROJECT SUBMISSIONS</span>
                </div>

                <div className="Sidebar-Progress">
                    <img src={ProjectLibrary} className="sidebar-icon" alt="" />
                    <span className="sidebar-text">PROJECT LIBRARY</span>
                </div>
            </div>

            <div>
                <img src={ArrowLeft} className="pinkleft-arrow" alt="" />
            </div>
                <div className="bottom-options">
                    <div className="Sidebar-Progress">
                        <img src={UserProfile} width="13px" height="13px" margin="959px 47px" alt="" /> <br></br>
                        <span className="sidebar-text">Profile</span>
                    </div>

                    <div className="Sidebar-Progress">
                        <img src={Settings} width="13px" height="13px" margin="959px 47px" alt="" /> <br></br>
                        <span className="sidebar-text">Settings</span>
                    </div>
                    <div className="Sidebar-Progress">
                        <img src={Logout} width="13px" height="13px" margin="959px 47px" alt="" /> <br></br>
                        <span className="sidebar-text">Log out</span>
                    </div>

                </div>
            </div>
    );
}
export default Sidebar;
