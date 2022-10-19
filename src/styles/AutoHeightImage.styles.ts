import styled from 'styled-components';

export const AutoHeightImageWrapper = styled.div`
    width: 100%;
    & > span {
        position: unset !important;
        z-index: 5;
        & .autoImage {
            object-fit: contain !important;
            position: relative !important;
            height: auto !important;
        }
    }
`;