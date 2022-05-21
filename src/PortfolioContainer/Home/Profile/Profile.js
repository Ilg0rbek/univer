import React from 'react'
import './Profile.css'
import Typical from 'react-typical'

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://github.com/Ilg0rbek">
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href="https://github.com/Ilg0rbek">
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href="https://github.com/Ilg0rbek">
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href="https://github.com/Ilg0rbek">
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href="https://github.com/Ilg0rbek">
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello &nbsp; I'm &nbsp; <span className="highlighted">Ilg'orbek</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {""}
                            <h1>
                                {""}
                                <Typical
                                    loop="Infinity"
                                    steps={[
                                        "Ilg`orbek Dev 🔴 ",
                                        1000,
                                        "Full Stack Developer 💻 ",
                                        1000,
                                        "MERN Stack Dev 😎 ",
                                        1000,
                                        "TUIT Student 🏤 ",
                                        1000,
                                        "React / Next js Dev 📱 ",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Knack of building applications with front and back end operations
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {" "}
                            Hire Me {" "}
                        </button>
                        <a href="My-resume.pdf" download='My-resume.pdf'>
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    )
}

export default Profile
