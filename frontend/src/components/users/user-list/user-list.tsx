import React from 'react';
import * as S from './styles';
import User from '../user/user';
import { USERS } from '../../../constants';

const UserList = () => {
    const users = USERS;

    return (
        <S.StyledUserList>
            {users.map((user) => (
                <User key={user.id} user={user} />
            ))}
        </S.StyledUserList>
    );
};

export default UserList;
