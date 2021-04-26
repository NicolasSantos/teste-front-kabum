import React from 'react';

const RadioButton = (props) => {
    const handleChange = (event) => {
        props.onChange(event.target.value, props.name);
    }

    return (
        <div>
            <input id={props.label} name={props.name} onChange={handleChange} value={props.value} type="radio" checked={props.checked} />
            <label htmlFor={props.label}>{props.label}</label>
        </div>
    )
}

export default RadioButton;