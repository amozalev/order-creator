import React, { useEffect } from 'react';
import * as S from './styles';
import User, { UserType } from '../user/user';
import { Button } from '../../button/button';
import { Link } from 'react-router-dom';
import { DataLoader, useUsersLoader } from '../../../loaders/user-loader';
import { ApiClient } from '../../../api/api-client';

const UserList = () => {
    const apiUrl = process.env.REACT_APP_API || 'http://localhost:4000';
    const apiClient = new ApiClient(apiUrl);
    const {
        data: users,
        getData: getUsersCallback
    } = useUsersLoader(apiClient);

    useEffect(() => {
        getUsersCallback();
    }, []);

    return (
        <DataLoader>
            <S.Controller>
                <Link to="new">
                    <Button>Add</Button>
                </Link>
            </S.Controller>
            <S.StyledUserList>
                {users.map((user: UserType) => (
                    <User key={user.id} user={user} />
                ))}
            </S.StyledUserList>
        </DataLoader>
    );
};

export default UserList;
