import React from 'react';
import Order from '../order/order';
import * as S from './styles';
import { ORDERS } from '../../../constants';
import { Button } from '../../button/button';
import { Link } from 'react-router-dom';

const OrdersList = () => {
    const orders = ORDERS;

    return (
        <>
            <S.Controller>
                <Link to="new">
                    <Button>Add</Button>
                </Link>
            </S.Controller>
            <S.StyledOrdersList>
                {orders.map((order) => (
                    <Order key={order.id} order={order} />
                ))}
            </S.StyledOrdersList>
        </>
    );
};

export default OrdersList;
