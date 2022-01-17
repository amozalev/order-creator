import React from 'react';
import Order from '../order/order';
import * as S from './styles';
import { ORDERS } from '../../../constants';

const OrdersList = () => {
    const orders = ORDERS;

    return (
        <S.StyledOrdersList>
            {orders.map((order) => (
                <Order key={order.id} order={order} />
            ))}
        </S.StyledOrdersList>
    );
};

export default OrdersList;
