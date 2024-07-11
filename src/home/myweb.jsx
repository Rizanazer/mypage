import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './myweb.css';

function Myweb() {
    const { text } = useTypewriter({
        words: ["Software Engineer", "Flutter Developer", "React Developer"],
        loop: true,
    });
    const googleDownload = "https://drive.google.com/file/d/1O2mee1hvVrQCnHx2nSzPzdk7C_RjicOE/view?usp=sharing"

    return (
        <body className="container position-relative">

            <header className="display-flex-column center section1">
                <div className="overlay"></div>
                <div className="display-flex-column hero-content">
                    <span className="hero-text hero-text-up">Hello there,</span>
                    <span className="hero-text hero-text-down">I'm Mohammed Riza Nazer</span>
                    <span className='sub-hero-text'>{text} </span><span className='sub-hero-text'><Cursor /></span>
                    <div className="buttons display-flex-row">
                        <div className="box button" onClick={() => { }}>Contact Me</div>
                        <a href={googleDownload} className="box button" download>Download Resume</a>
                    </div>
                </div>
            </header>
            <div className="section2 center">
                <div className="box display-flex-row s2">
                    <div className=" section2-img center">
                        <img src="images/man.png" className="sub-img" alt="" srcset="" />
                    </div>
                    <div className=" section2-content">
                        <h2>About Myself</h2>
                        <div className=" display-flex-column">
                            <p>I am a Computer Science and Engineering graduate with a strong foundation in both theory and practical applications. My educational background has equipped me with comprehensive knowledge in various areas of computer science, including algorithms, data structures, software engineering principles, and more.
                                I have hands-on experience with modern front-end development technologies such as React and mobile app development using Flutter. </p>
                            <ul className='info '>
                                <li><span className='info-head bold'> Name:</span>
                                    <span className='info-tail'>Mohammed Riza Nazer</span></li>
                                <li><span className='info-head bold'>Address:  </span>
                                    <span className='info-tail'>Kondotty Kerala India</span></li>
                                <li><span className='info-head bold'>LinkedIn: </span>
                                    <a href='https://www.linkedin.com/in/mohammed-riza-nazer-55744b243/' className='info-tail csr no-underline'>https://www.linkedin.com/in/mohammed-riza-nazer-55744b243/</a></li>
                                <li><span className='info-head bold'>Email: </span>
                                    <span className='info-tail'>mohammedrizanazer@gmail.com</span></li>
                                <li><span className='info-head bold'>GitHub: </span>
                                    <a href='https://github.com/Rizanazer' className='info-tail csr no-underline'>https://github.com/Rizanazer</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section2 center">
                <div className="box display-flex-row s2">
                    <div className=" section2-content center">
                        <h2>My Skills</h2>
                        <div className=" display-flex-row">
                            
                        </div>
                    </div>
                </div>
            </div>


        </body>

    );
};

export default Myweb;
