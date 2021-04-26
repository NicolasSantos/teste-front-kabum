import React from 'react';
import PaginationButton from './PaginationButton/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const PaginationWrapper = styled.div`
    text-align: center;
`;


const Pagination = (props) => {
    const getButtonList = () => {
        let buttonList = [];

        for (var i = 1; i <= props.totalPage; i++) {
            buttonList.push(<PaginationButton key={i} name={i} onClick={props.onChangePage} disabled={false} active={props.currentPage === i}></PaginationButton>);
        }

        return buttonList;
    }

    return (
        <PaginationWrapper>
            <PaginationButton   name={props.currentPage - 1} 
                                icon={<FontAwesomeIcon icon={faChevronLeft}/>} 
                                onClick={props.onChangePage}
                                disabled={props.currentPage === 1}/>

            { getButtonList().map(item => item) }

            <PaginationButton   name={props.currentPage + 1} 
                                icon={<FontAwesomeIcon icon={faChevronRight}/>} 
                                onClick={props.onChangePage}
                                disabled={props.currentPage === props.totalPage}/>
        </PaginationWrapper>
    )
}

export default Pagination;