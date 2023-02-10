import React from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';

const PrevBtn = (props) => {
    const {className, onClick} = props;
    
    return (
        <div className={className} onClick={onClick}>
            <MdArrowBackIosNew className="arrowIcon arrowLeft" />
        </div>
    );
}

export default PrevBtn;