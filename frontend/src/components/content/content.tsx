import React from 'react';
import { PropsWithChildren } from 'react';
import * as S from './styles';

export interface Props {
    color?: string;
}

const Content = ({ children, color }: PropsWithChildren<Props>) => {
    return <S.StyledContent color={color}>{children}</S.StyledContent>;
};

export default Content;
