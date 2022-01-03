import React from 'react';
import './Team.css';
import profile from '../../images/img1.jpg';
import pro1 from '../../images/img2.jpg';
import pro2 from '../../images/img3.jpg';
import pro3 from '../../images/img4.jpg';
import pro4 from '../../images/img5.jpg';





function Team() {
    return (
        <>
        <div className="card-wrapper">
        <h1 className="h3">Team Members</h1>
        <div className="card-container">
        <div className="card">
            <img className="img1" src={profile} alt="Avatar" style={{width:"100%"}} />
            <div className="container">
            <h4 className="h4">Tanu</h4> 
            <p className="para">CEO & Founder</p>
            </div>
        </div>

        <div className="card">
            <img className="img" src={pro1} alt="Avatar" style={{width:"100%"}} />
            <div className="container">
            <h4 className="h4">Tj</h4> 
            <p className="para">COO & Board Member</p>
            </div>
        </div>

        <div className="card">
            <img className="img" src={pro2} alt="Avatar" style={{width:"100%"}} />
            <div className="container">
            <h4 className="h4">Ram</h4> 
            <p className="para">Co-Founder</p>
            </div>
        </div>

        <div className="card">
            <img className="img" src={pro3} alt="Avatar" style={{width:"100%"}} />
            <div className="container">
            <h4 className="h4">Yini</h4> 
            <p className="para">Manager</p>
            </div>
        </div>

        <div className="card">
            <img className="img" src={pro4} alt="Avatar" style={{width:"100%"}} />
            <div className="container">
            <h4 className="h4">Sin2</h4> 
            <p className="para">Software Developer</p> 
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Team;
