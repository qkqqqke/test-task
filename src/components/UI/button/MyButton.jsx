import React from 'react';

const MyButton = ({children, ...props}) => {
    return (
        <button className={{props}}>
            {children}
        </button>
    );
};

export default MyButton;