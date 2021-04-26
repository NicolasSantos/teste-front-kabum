import React from 'react';
import styled from "styled-components";

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    cursor: pointer;
    color: ${props => (props.active ? "#FFFFFF" : "#000000")};
    background-color: ${props => (props.active ? "#0091EA" : props.disabled ? "#E0E0E0" : "white")};
    opacity: ${props => props.disabled ? "0.5" : "1"};
    pointer-events: ${props => props.disabled ? "none" : "initial"};

    &:hover {
        background-color: ${props => (props.active ? "#0091EA" : "#EEEEEE")};
        opacity: ${props => (props.active ? "0.8" : "1")};
    }
`;

const PaginationButton = (props) => {
    return (
        <Button onClick={() => props.onClick(props.name)} disabled={props.disabled} active={props.active}>
            {props.icon ? props.icon : props.name}
        </Button>
    )
}

export default PaginationButton;