import React from 'react';

const Button = ({ children, onClick }) => {

    return (
        <div>
            <a className="btn bg-gradient-to-r from-[#7E90FE]  to-[#9873FF] text-white border-white">{children}</a>
        </div>
    );
};

export default Button;