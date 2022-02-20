import React from 'react';
import * as S from './styles';
import { UserType } from '../user/user';
import { useDataLoader } from '../../../hooks/data-loader';
import { getFormData } from '../../utils';
import { ApiClient } from '../../../api/api-client';

const NewUser: React.FC<any> = () => {
    const { loading, data: users, error } = useDataLoader<UserType>('users');
    const apiUrl = process.env.REACT_APP_API || 'http://localhost:4000';
    const apiClient = new ApiClient<UserType>(apiUrl);

    const onSubmit = (event: any) => {
        event.preventDefault();
        const data = getFormData(event);
        data['id'] = Math.max(...users.map((i) => parseInt(i.id)));
        const payload = { user: data };
        apiClient.saveItem('users', payload);
    };

    return (
        <S.StyledNewUser className="container">
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="title">Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" name="name" />
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Save" />
                </div>
            </form>
        </S.StyledNewUser>
    );
};

export default NewUser;
