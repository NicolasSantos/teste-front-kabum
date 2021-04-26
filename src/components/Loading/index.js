import React from 'react';
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const LoadingWrapper = styled.div`
    margin: auto;
    border: 4px solid #E0E0E0;
    border-radius: 50%;
    border-top: 4px solid #0091EA;
    width: 30px;
    height: 30px;
    -webkit-animation: ${spinAnimation} 2s linear infinite; /* Safari */
    animation: ${spinAnimation} 2s linear infinite;
`;

const Loading = (props) => {
    return (
        <LoadingWrapper></LoadingWrapper>
    )
}

export default Loading;