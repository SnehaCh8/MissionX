import './HelpRequest.css';
import React from 'react'
import Aiden from '../images/AidenAndrews.png'
import Rawiri from '../images/RawiriFletcher.png'
import Neveah from '../images/NeveahMachenry.png'
import Javier from '../images/JavierFuego.png'
import Tokio from '../images/TokioHan.png'


function HelpRequest () {
  return (

    <div className="request">

  <div className="help-request">
    <h3>Help Request</h3>

        <input type="checkbox" />
        <div className="aiden-project">
          <img src={Aiden} className="student-img" alt="" />
            <p>AIDEN needs help with his project</p>
    </div> <br></br>
    
        <input type="checkbox" />
    <div className="aiden-project">
          <img src={Rawiri} className="student-img" alt="" />
          <p>RAWIRI needs help with his project</p>
    </div> <br></br>

        <input type="checkbox" />
    <div className="aiden-project">
          <img src={Neveah} className="student-img" alt="" />
          <p>NEVEAH needs help with his project</p>
        </div> <br></br>
        
        <input type="checkbox" />
        <div className="aiden-project">
          <img src={Javier} className="student-img" alt="" />
          <p>JAVIER needs help with his project</p>
    </div> <br></br>
    
        <input type="checkbox" />
        <div className="aiden-project">
          <img src={Tokio} className="student-img" alt="" />
            <p>TOKIO needs help with his project</p>
    </div>
    
      </div>
    </div>
);
}

export default HelpRequest

