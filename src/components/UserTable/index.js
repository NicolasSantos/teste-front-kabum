import React from 'react';
import styled from "styled-components";
import { getFullname } from '../../helpers/Formatter/index';


const Table = styled.table`
    width: 80vw;
    margin: 30px auto 0 auto;
    text-align: left;
    border-collapse: collapse;
    min-width: 300px;
    
    th {
        border-bottom: 1px solid;
        padding-bottom: 10px;
    }

    tbody {
        tr {
            &:hover {
                background-color: #EEEEEE;
            }
        }

        td {
            padding: 10px 5px 10px 0;
        }
    }
`;

const UserTable = (props) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.map((user) => {
                        return (
                            <tr key={user.email}>
                                <td>{getFullname(user.name)}</td>
                                <td>{user.location.city}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.gender}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default UserTable;