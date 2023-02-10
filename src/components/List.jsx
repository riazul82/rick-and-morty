import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PrevBtn from './PrevBtn';
import NextBtn from './NextBtn';

import ListCard from './ListCard';

const List = ({title, data, loader}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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
        <div className="list" style={{marginTop: '107px'}}>
            <div className="header">
                <p className="title">{title}</p>
            </div>

            <Slider {...settings} className="sliderContent">
                {
                    !loader ?
                    (data && data.map((data) => {
                        return <ListCard data={data} key={data.id} title={title.toLowerCase()} />
                    })) : <p className="loading">Loading...</p>
                }
            </Slider>
        </div>
    );
}

export default List;