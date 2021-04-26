import React, { useState } from 'react';
import styled from "styled-components";

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 200px;

    input {
        margin-top: 5px;
    }
`;

const Input = (props) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        props.onChange(event.target.value, props.name);
    };

    return (
        <InputWrapper>
            <label>{props.label}</label>
            <input value={value} onChange={handleChange} placeholder={props.placeholder}/>
        </InputWrapper>
    )
}

export default Input;