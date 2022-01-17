import React from 'react';
import * as S from './styles';

export interface OrderType {
    title: string;
    description: string;
    ordererId: string;
}

export interface OrderProps {
    order: OrderType;
}

const Order = ({ order }: OrderProps) => {
    return (
        <S.StyledOrder>
            <S.OrderImg />
            <S.OrderContent>
                <h3>{order.title}</h3>
                <p>{order.description}</p>
            </S.OrderContent>
        </S.StyledOrder>
    );
};

export default Order;
