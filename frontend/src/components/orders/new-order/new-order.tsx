import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { UserType } from '../../users/user/user';
import Select from 'react-select';
import { useDataLoader } from '../../../hooks/data-loader';
import { getFormData } from '../../utils';

const NewOrder: React.FC<any> = () => {
    const { loading, data: users, error } = useDataLoader<UserType>('users');
    const [options, setOptions] = useState<any>([]);

    useEffect(() => {
        const selectData = users.map((i: UserType) => ({
            value: i.id,
            label: i.name
        }));
        !!selectData.length && setOptions(selectData);
    }, [users]);

    const onSubmit = (event: any) => {
        event.preventDefault();
        const data = getFormData(event);
    };

    return (
        <S.StyledNewOrder className="container">
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="col-75">
                        <input type="text" name="title" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="user">Assignee</label>
                    </div>
                    <div className="col-75">
                        <Select
                            name="user"
                            isClearable
                            isLoading={loading}
                            options={options}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="col-75">
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Write something.."
                        />
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Save" />
                </div>
            </form>
        </S.StyledNewOrder>
    );
};

export default NewOrder;
