import React from 'react';
import * as S from './styles';
import User, { UserType } from '../user/user';
import { Button } from '../../button/button';
import { Link } from 'react-router-dom';
import { useUsersLoader } from '../../../loaders/user-loader';
import { Spinner } from '../../spinner/spinner';

const UserList = () => {
    const { loading, data: users, error } = useUsersLoader('users');

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
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
                </>
            )}
        </>
    );
};

export default UserList;
