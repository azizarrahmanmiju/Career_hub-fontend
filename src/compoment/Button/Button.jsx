import React from 'react';

const Button = ({ children, onClick }) => {

    return (
        <div>
            <a onClick={onClick} className="btn bg-gradient-to-r from-[#7E90FE]  to-[#9873FF] text-white border-white">{children}</a>
        </div>
    );
};

export default Button;