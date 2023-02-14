import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContextProvider';

// components
import Character from './Character';
import PrevBtn from './PrevBtn';
import NextBtn from './NextBtn';

// slick slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MeetTheCast = () => {
    const { characters } = useContext(AppContext);
    const navigate = useNavigate();

    const charactersData = characters[0];
    const loadingStatus = characters[1];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <PrevBtn type="cast"/>,
        nextArrow: <NextBtn type="cast"/>,
        responsive: [
            {
                breakpoint: 1580,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }
        ]
    };

    const handleBtnClick = () => {
        navigate('/cast');
    }

    return (
        <div className="list meetTheCast">
            <div className="header">
                <p className="title">Meet the cast</p>
                <div className="arrowIcons">
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.05 6.364L8 11.314L6.586 12.728L0.222 6.364L6.586 -6.18079e-08L8 1.414L3.05 6.364Z" fill="#15BFFD"/>
                    </svg>
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.95 6.364L4.94551e-07 11.314L1.414 12.728L7.778 6.364L1.414 -6.18079e-08L6.18079e-08 1.414L4.95 6.364Z" fill="#15BFFD"/>
                    </svg>
                </div>
                <button onClick={handleBtnClick}>View All</button>
            </div>

            <Slider {...settings} className="sliderContent">
                {
                    !loadingStatus ?
                    (charactersData && charactersData.map((data) => {
                        return <Character key={data.id} data={data} />
                    })) : <p className="loading">Loading...</p>
                }
            </Slider>
        </div>
    );
}

export default MeetTheCast;