import React from 'react';
import './DashboardHeader.css'
import levelupl from '../images/LevelUpWorks-blue.png';
import CTAButton from '../images/CTAButton.png';

// function Button(props) {
//     return (
//         <button className={props.style}>
//             <h1>{props.text}</h1>

//         </button>

//     );
// }

function TeacherNavbar() {
    return (
        <div className="teacher-navbar">

            <div>
                <img src={levelupl} width="146px" height="60px" alt="" />
                <img src={CTAButton} width="200px" height="40px" align="right" alt="" />
            </div>

            {/* <div>
                <img src={CTAButton} width="200px" height="40px" align="right" alt="" />
            </div> */}
            
                {/* <div className="teacher-options">
                    <Button style="yellowButton" text="Take Screenshot"/>
            </div>
            
            <div className="teacher-options">
                <Button style="pinkButton" text="Help Centre" />
            </div>

            <div className="teacher-options">
                <Button style="blueButton" text="More Projects" />
            </div> */}

        </div>
    );
}

export default TeacherNavbar;