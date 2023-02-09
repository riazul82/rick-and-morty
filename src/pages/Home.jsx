import React from 'react';
import logo from '../assets/images/Logo.svg';
import bubble from '../assets/images/bubble.svg';
import portal from '../assets/images/portal.svg';
import gun from '../assets/images/Gun.svg';

const Home = () => {
    return (
        <div className="home">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="headingContainer">
                <div className="elements">
                    <img id="bubble" src={bubble} alt="bubble" />
                    <img id="portal" src={portal} alt="portal" />
                    <img id="gun" src={gun} alt="gun" />
                </div>

                <div className="headerTitle">
                    <h1 className="headerTitleTop">
                        <span className="italic">The</span>
                        <span className="gradient">Rick &</span>
                    </h1>
                    
                    <h1 className="headerTitleBottom">
                        <span className="gradient">Morty</span>
                        <span className="italic"> Wiki</span>
                    </h1>
                </div>

                <div className="headingBottom">
                    <button>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18V18ZM8.622 6.415L13.501 9.667C13.5559 9.70351 13.6009 9.75302 13.632 9.81111C13.6631 9.86921 13.6794 9.93409 13.6794 10C13.6794 10.0659 13.6631 10.1308 13.632 10.1889C13.6009 10.247 13.5559 10.2965 13.501 10.333L8.621 13.585C8.56083 13.6249 8.49098 13.6477 8.41887 13.6512C8.34676 13.6546 8.27507 13.6384 8.21141 13.6043C8.14774 13.5703 8.09448 13.5197 8.05726 13.4578C8.02004 13.396 8.00025 13.3252 8 13.253V6.747C8.00013 6.67465 8.01989 6.60369 8.05716 6.54168C8.09443 6.47967 8.14782 6.42893 8.21165 6.39486C8.27547 6.36079 8.34734 6.34467 8.41961 6.34822C8.49187 6.35177 8.56182 6.37485 8.622 6.415V6.415Z" fill="white"/>
                        </svg>
                        <span>Watch Now</span>
                    </button>

                    <div className="headingBottomText">
                        <p>Brilliant but boozy scientist Rick hijacks his fretful </p>
                        <p>teenage grandson, Morty, for wild escapades </p>
                        <p>in other worlds and alternate dimensions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;