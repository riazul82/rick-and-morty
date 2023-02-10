import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Character from './Character';
import PrevBtn from './PrevBtn';
import NextBtn from './NextBtn';

const MeetTheCast = () => {
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

    return (
        <div className="list" style={{marginTop: '100px'}}>
            <div className="header">
                <p className="title">Meet the cast</p>
                <button>View All</button>
            </div>

            <Slider {...settings} className="sliderContent">
                <Character />
                <Character />
                <Character />
                <Character />
                <Character />
            </Slider>
        </div>
    );
}

export default MeetTheCast;