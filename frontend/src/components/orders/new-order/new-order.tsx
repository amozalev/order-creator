import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { useDataLoader } from '../../../hooks/use-data-loader';
import { USERS } from '../../../constants';
import { UserType } from '../../users/user/user';
import Select from 'react-select';

const NewOrder: React.FC<any> = () => {
    const { loading, data: users } = useDataLoader<UserType>({
        dataSource: USERS
    });
    const [options, setOptions] = useState<any>([]);

    useEffect(() => {
        const selectData = users.map((i) => ({ value: i.id, label: i.name }));
        !!selectData.length && setOptions(selectData);
    }, [users]);

    return (
        <S.StyledNewOrder className="container">
            <form action="/">
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
