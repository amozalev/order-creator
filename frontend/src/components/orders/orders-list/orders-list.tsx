import React from 'react';
import Order from '../order/order';
import * as S from './styles';
import { ORDERS } from '../../../constants';
import { Button } from '../../button/button';

const OrdersList = () => {
    const orders = ORDERS;

    return (
        <>
            <S.OrderController>
                <Button>Add</Button>
            </S.OrderController>
            <S.StyledOrdersList>
                {orders.map((order) => (
                    <Order key={order.id} order={order} />
                ))}
            </S.StyledOrdersList>
        </>
    );
};

export default OrdersList;
