import React from 'react';

const Button = ({style,children}) => {
    return (
        <button className={style} type='submit'>
            {children}
        </button>
    );
};

export default Button;