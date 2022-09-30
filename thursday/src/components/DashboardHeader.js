import React from 'react';
import './DashboardHeader.css'
import levelupl from './LevelUpWorks-blue.png';

function TeacherNavbar() {
    return (
        <div>

            <NavbarLogo href="/">
                <img src={levelupl} alt="" />
            </NavbarLogo>
                <Nav className="teacher-options" navbar>
                    <Button1>
                            Take screenshot
                    </Button1>

                    <Button2>
                            Help centre
                    </Button2>

                    <Button3>
                           More projects
                    </Button3>
                </Nav>
        </div>
    );
}

export default TeacherNavbar;