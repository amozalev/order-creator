import React from 'react';
import * as S from './styles';
import Card from "../../card/card";

export interface UserType {
    id: string;
    name: string;
}

export interface UserProps {
    user: UserType;
}

const User = ({ user }: UserProps) => {
    return (
        <Card
            image={<S.Avatar />}
            content={
                <S.UserInfo>
                    <h3>{user.name}</h3>
                </S.UserInfo>
            }
        />
    );
};

export default User;
