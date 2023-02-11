import React from 'react';

const Character = ({ data }) => {
    return (
        <div className="characterBox">
            <svg className="cardLayout" viewBox="0 0 290 296" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_23_19)">
                <path d="M284.218 249.988C287.81 247.791 290 243.883 290 239.672L290 12.0933C290 5.41437 284.586 0 277.907 0L12.0934 0C5.41437 0 0 5.41437 0 12.0933L0 283.907C0 290.586 5.41437 296 12.0934 296L205.6 296C207.827 296 210.011 295.385 211.91 294.223L284.218 249.988Z" fill="white" fillOpacity="0.05"/>
                <path d="M289.622 239.672C289.622 243.752 287.5 247.537 284.02 249.666L211.713 293.9C209.873 295.026 207.757 295.622 205.6 295.622L12.0934 295.622C5.62308 295.622 0.37793 290.377 0.37793 283.907L0.37793 12.0933C0.37793 5.62308 5.62308 0.37793 12.0934 0.37793L277.907 0.37793C284.377 0.37793 289.622 5.62308 289.622 12.0933L289.622 239.672Z" stroke="url(#paint0_linear_23_19)" strokeOpacity="0.7" strokeWidth="0.755833"/>
                </g>
                <defs>
                <filter id="filter0_b_23_19" x="-7.55833" y="-7.55833" width="305.117" height="311.117" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.77917"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_23_19"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_23_19" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_23_19" x1="-25.4789" y1="-10.2162" x2="159.097" y2="327.342" gradientUnits="userSpaceOnUse">
                <stop stopColor="#84F729"/>
                <stop offset="1" stopColor="#15BFFD"/>
                </linearGradient>
                </defs>
            </svg>

            <div className="characterBoxContent">
                <div className="image">
                    <img src={data.image} alt={data.name} />
                </div>
                <div className="text">
                    <p>{data.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Character;