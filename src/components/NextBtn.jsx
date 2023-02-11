import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

const NextBtn = (props) => {
    const {className, onClick, currentSlide, slidesCount} = props;

    const activeBtn = {
        opacity: 1,
        visibility: 'visible',
        pointerEvents: 'auto'
    }

    return (
        <div className={className} style={activeBtn} onClick={onClick}>
            <MdArrowForwardIos className="arrowIcon" />
        </div>
    );
}

export default NextBtn;