import React from 'react';
import * as S from './styles';
import Card from '../../card/card';

export interface OrderType {
    id: string;
    title: string;
    description: string;
    ordererId: string;
}

export interface OrderProps {
    order: OrderType;
}

const Order = ({ order }: OrderProps) => {
    return (
        <Card
            image={<S.OrderImg />}
            content={
                <S.OrderContent>
                    <h3>{order.title}</h3>
                    <p>{order.description}</p>
                </S.OrderContent>
            }
        />
    );
};

export default Order;
