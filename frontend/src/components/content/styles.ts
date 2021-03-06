import styled from 'styled-components';

export const StyledContent = styled.article`
    padding: 0 1.5rem;
    box-sizing: border-box;

    @media screen and (min-width: 30rem) {
        flex: 70%;
        overflow: auto;
    }
`;
