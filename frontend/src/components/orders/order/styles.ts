import styled from 'styled-components';

export const OrderImg = styled.div`
    min-width: 80px;
    height: 80px;
    border-radius: 0.3em;
    background: linear-gradient(to bottom, #f1ece2 0%, #5c96c0 100%);
    opacity: 0.7;
`;

export const OrderContent = styled.div`
    h3 {
        margin: 0;
        font-size: 1em;
    }

    p {
        margin: 0;
        font-size: 0.7em;
        color: #222;
    }
`;
