import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers, setUsersFiltered, setUsersPaginationCurrentPage } from '../../redux/actions/Users/index';
import { getFullname } from '../../helpers/Formatter/index';
import styled from "styled-components";
import Pagination from '../Pagination/index';
import UserTable from '../UserTable/index';
import Input from '../Input/index';
import RadioButton from '../RadioButton';
import Loading from '../Loading';

const RadioGroup = styled.div`
    display: flex;
    & > div {
        padding-right: 15px;
    }
`;

const FiltersWrapper = styled.div`
    display: flex;

    & > div {
        padding-right: 15px;
    }
`;

const UsersList = () => {
    const [filter, setFilter] = useState({name: '', city: '', gender: ''});
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const filteredUsers = useSelector(state => state.users.filteredUsers);
    const pagination = useSelector(state => state.users.pagination);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);

    useEffect(() => {
        dispatch(setUsers());
    }, [])

    const onChangePage = (pageNumber) => {
        if(pagination.currentPage !== pageNumber) {
            dispatch(setUsersPaginationCurrentPage(pageNumber));
        }
    }

    const onChangeFilter = (fieldValue, fieldName) => {
        setFilter({...filter, [fieldName]: fieldValue});
    }

    useEffect(() => {
        if(!filter.name && !filter.city && !filter.gender) {
            return;
        }

        let usersFiltered = users.filter((user) => {
            let matchUser = true;

            if(filter.name && getFullname(user.name).toLowerCase().indexOf(filter.name.toLowerCase()) === -1) {
                matchUser = false;
            }
            
            if(filter.city && user.location.city.toLowerCase().indexOf(filter.city.toLowerCase()) === -1) {
                matchUser = false;
            }

            if(filter.gender && user.gender.toLowerCase() !== filter.gender.toLowerCase()) {
                matchUser = false;
            }

            return matchUser;
        })

        dispatch(setUsersFiltered(usersFiltered));
    }, [filter])

    const getUsersByCurrentPage = () => {
        return filteredUsers.filter((user, index) => {
            if(index < pagination.currentPage * pagination.itensPerPage && index >= (pagination.currentPage * pagination.itensPerPage) - pagination.itensPerPage) {
                return true;
            } else {
                return false;
            }
        })
    }

    return (
        <>
            <h1>User list</h1>
            
            <FiltersWrapper>
                <Input label={'Search user'} name={'name'} placeholder={'Name'} onChange={onChangeFilter}/>
                
                <Input label={'City'} name={'city'} placeholder={'City'} onChange={onChangeFilter}/>
                
                <div>
                    <label>Gender</label>
                    <RadioGroup>
                        <RadioButton    label={"Male"}
                                        name={"gender"} 
                                        onChange={ onChangeFilter} 
                                        checked={filter.gender === "male" } 
                                        value="male"/>

                        <RadioButton    label={"Female"}
                                        name={"gender"} 
                                        onChange={ onChangeFilter } 
                                        checked={filter.gender === "female" } 
                                        value="female"/>
                    </RadioGroup>
                </div>
            </FiltersWrapper>

            <br></br>
            <br></br>

            {
                filteredUsers.length > 0 && 
                <>
                    <UserTable users={getUsersByCurrentPage()}/>
                    <Pagination {...pagination} onChangePage={onChangePage}/>
                </>
            }

            {loading && <Loading/>}
            {filteredUsers.length === 0 && !loading && <p>Nenhum usuário encontrado</p>}
            {error && !loading && <p>{error}</p>}
        </>
    )
}

export default UsersList;