import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

const NextBtn = (props) => {
    const {className, onClick} = props;

    return (
        <div className={className} onClick={onClick}>
            <MdArrowForwardIos className="arrowIcon" />
        </div>
    );
}

export default NextBtn;