import React from 'react'
import styled from 'styled-components'

const StyledPageInfo = styled.div`
    font-size: .9rem;
    position: fixed;
    left: 5px;
    top: 50%;
    transform: translate(-50%, -50%);
    transform: rotate(270deg);
    transform-origin: top left;
    @media ${({ theme }) => theme.device.tablet}{
        display: none;
    }
`;

const StyledPageInfoLabel = styled.p`
    &:before,
    &:after {
        position: absolute;
        content: "";
        border-bottom: 1px solid ${({ theme }) => theme.colors.elements};
        width: 50px;
        top: 23px;
        right: -60px;
    }
    &:after {
        left: -60px;
    }
`;

const PageInfo = ({ children }) => {
    return (
        <StyledPageInfo>
            <StyledPageInfoLabel>{children}</StyledPageInfoLabel>
        </StyledPageInfo>
    );
}

export default PageInfo;