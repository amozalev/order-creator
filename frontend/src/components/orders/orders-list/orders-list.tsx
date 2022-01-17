import React from 'react';
import Order, { OrderType } from '../order/order';
import * as S from './styles';

export interface Props {
    orders: OrderType[];
}

const OrdersList = ({ orders }: Props) => {
    return (
        <S.StyledOrdersList>
            {orders.map((order) => (
                <Order key={order.id} order={order} />
            ))}
        </S.StyledOrdersList>
    );
};

export default OrdersList;
