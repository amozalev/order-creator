import styled from 'styled-components';

export const StyledSideNavList = styled.nav`
    display: flex;
    flex-flow: column;
    //background: linear-gradient(to bottom, #ccc 50%, #deded8 80%);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);

    @media screen and (min-width: 30rem) {
        flex: 10%;
    }
`;
