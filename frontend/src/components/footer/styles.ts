import styled, { css } from 'styled-components';

export const StyledFooter = styled.footer`
    flex: 0 0 content;
    padding: 0.5rem;
    box-sizing: border-box;
    text-align: center;
    color: #fff;

    ${({ theme }) => {
        return css`
            background-color: ${theme.colors.primary};
        `;
    }}
`;
