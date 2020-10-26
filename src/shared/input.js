import React from 'react';

const Input = ({type, placeholder, className, onChange}) => {
    return(
        <input type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        />
    )
}

export default Input;