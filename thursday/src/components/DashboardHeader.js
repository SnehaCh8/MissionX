import React from 'react';
import './DashboardHeader.css'
import levelupl from './LevelUpWorks-blue.png';

function Button(props) {
    return (
        <button className={props.style}>
            <h1>{props.text}</h1>

        </button>

    );
}

function TeacherNavbar() {
    return (
        <div>

            <img src={levelupl} alt="" />
            
                <div className="teacher-options">
                    <Button style="yellowButton" text="Take Screenshot"/>

                </div>
        </div>
    );
}

export default TeacherNavbar;