import React from 'react';
import styled from 'styled-components';


const StyledMagnetizeButton = styled.button`
    box-sizing: border-box;
    z-index: 11;
    position: fixed;
    right: 24px;
    width: 40px;
    height: 40px;
    border: 2px solid ${({ theme }) => theme.colors.font};
    background: transparent;
    border-radius: 50%;
    cursor: pointer;
    outline: 0;
    transition:  border .2s cubic-bezier(0.645, 0.645, 0.645, 0.600);
    width: 50px;
    height: 50px;
    left: 10px;
    top: 10px;
    &:before {
        content: '';
        opacity: 0;
        width: 0;
        height: 0;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        background: transparent;
        transform: translate(-50%, -50%);
        transition: all 0.2s ease;
    }
    &:hover {
        border: 2px solid ${({ theme }) => theme.colors.border};
    };
`;

const StyledMenuButtonSpan = styled.span`
    display: block;
    position: relative;
    &:before,
    &:after {
        content: '';
        position: absolute;
        left: 0;
    }
    &:before {
        top: ${({ opened }) => opened ? 0 : '-8px'};
        transform: rotate${({ opened }) => opened ? '(225deg)' : 0};
    }
    &:after {
        bottom: ${({ opened }) => opened ? 0 : '-8px'};
        transform: rotate${({ opened }) => opened ? '(-225deg)' : 0};
    }
    width: 30px;
    height: 2px;
    background: ${({ opened }) => opened ? 'transparent' : ({ theme }) => theme.colors.font};
    transition: all 0.2s ease;
    transform: translate(10%, 0);
    &:before, &:after{
        width: 30px;
        height: 2px;
        background: ${({ theme }) => theme.colors.font};
        transition: all 0.2s ease;
    };
`;

const MenuButton = ({ setMenuOpen, menuOpen }) => {
    return (
        <StyledMagnetizeButton className='menu-button' onClick={() => setMenuOpen(!menuOpen)} opened={menuOpen}>
            <StyledMenuButtonSpan opened={menuOpen}></StyledMenuButtonSpan>
        </StyledMagnetizeButton>
    );
}

export default MenuButton;

