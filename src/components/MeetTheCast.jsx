import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContextProvider';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Character from './Character';
import PrevBtn from './PrevBtn';
import NextBtn from './NextBtn';

const MeetTheCast = () => {
    const { characters } = useContext(AppContext);
    const navigate = useNavigate();

    const charactersData = characters[0];
    const loadingStatus = characters[1];

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <PrevBtn/>,
        nextArrow: <NextBtn/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const handleBtnClick = () => {
        navigate('/cast');
    }

    return (
        <div className="list" style={{marginTop: '100px'}}>
            <div className="header">
                <p className="title">Meet the cast</p>
                <button onClick={handleBtnClick}>View All</button>
            </div>

            <Slider {...settings} className="sliderContent">
                {
                    !loadingStatus ?
                    (charactersData && charactersData.map((data) => {
                        return <Link to={`/cast/${data.id}`} key={data.id} className="link">
                            <Character data={data} />
                        </Link>
                    })) : <p className="loading">Loading...</p>
                }
            </Slider>
        </div>
    );
}

export default MeetTheCast;