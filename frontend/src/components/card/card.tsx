import React from 'react';
import * as S from './styles';

export interface CardProps {
    image?: any;
    content: any;
    onClick?: () => void;
}

const Card = ({ image, content, onClick }: CardProps) => {
    return (
        <S.StyledCard onClick={onClick}>
            <S.CardImg>{image}</S.CardImg>
            <S.CardContent>{content}</S.CardContent>
        </S.StyledCard>
    );
};

export default Card;
