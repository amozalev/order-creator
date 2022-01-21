import React from 'react';
import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './styles';

export interface Props {
    color?: string;
}

const Content = ({ children, color }: PropsWithChildren<Props>) => {
    return (
        <S.StyledContent color={color}>
            <Outlet />
        </S.StyledContent>
    );
};

export default Content;
