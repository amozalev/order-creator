import React from 'react';
import { PropsWithChildren } from 'react';

import * as S from './styles';
import { ITheme } from '../../styles/interfaces/styled';

export enum ButtonSize {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg'
}

export enum ButtonVariant {
    solid = 'solid',
    outline = 'outline',
    ghost = 'ghost'
}

export enum ButtonColor {
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    danger = 'danger'
}

export interface ButtonProps {
    size?: ButtonSize;
    color?: ButtonColor;
    variant?: ButtonVariant;
}

const ButtonComponent = ({
    children,
    size = ButtonSize.md,
    color = ButtonColor.primary,
    variant = ButtonVariant.solid
}: PropsWithChildren<ButtonProps>) => {
    return (
        <S.Button size={size} color={color} variant={variant}>
            <span>{children}</span>
        </S.Button>
    );
};

ButtonComponent.size = ButtonSize;

export const Button = ButtonComponent;
