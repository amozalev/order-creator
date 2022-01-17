import React from 'react';
import * as S from './styles';

export interface UserType {
    id: string;
    name: string;
}

export interface UserProps {
    user: UserType;
}

const User = ({ user }: UserProps) => {
    return (
        <S.StyledUser>
            <S.Avatar />
            <S.UserInfo>
                <h3>{user.name}</h3>
            </S.UserInfo>
        </S.StyledUser>
    );
};

export default User;
