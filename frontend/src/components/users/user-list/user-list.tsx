import React from 'react';
import * as S from './styles';
import User, { UserType } from '../user/user';

export interface Props {
    users: UserType[];
}

const UserList = ({ users }: Props) => {
    return (
        <S.StyledUserList>
            {users.map((user) => (
                <User key={user.id} user={user} />
            ))}
        </S.StyledUserList>
    );
};

export default UserList;
