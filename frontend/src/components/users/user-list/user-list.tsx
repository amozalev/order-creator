import React from 'react';
import * as S from './styles';
import User from '../user/user';
import { USERS } from '../../../constants';
import { Button } from '../../button/button';
import { Link } from 'react-router-dom';

const UserList = () => {
    const users = USERS;

    return (
        <>
            <S.Controller>
                <Link to="new">
                    <Button>Add</Button>
                </Link>
            </S.Controller>
            <S.StyledUserList>
                {users.map((user) => (
                    <User key={user.id} user={user} />
                ))}
            </S.StyledUserList>
        </>
    );
};

export default UserList;
