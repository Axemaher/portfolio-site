import React from 'react'
import styled from 'styled-components'
import codepenIco from '../../images/codepen-ico.png'
import githubIco from '../../images/github-ico.png'

const StyledMenuSogial = styled.ul`
    padding: 0;
    place-self: end;
    margin-bottom: 20px;
    justify-self: center;
`;

const StyledSocialLink = styled.a`
    padding: 10px;
`;

const StyledSocialLinkIcon = styled.img`
    width: 20px;
`;

const MenuSocial = () => {
    return (
        <StyledMenuSogial>
            <StyledSocialLink href="https://github.com/Axemaher">
                <StyledSocialLinkIcon src={codepenIco} alt="codepen icon" />
            </StyledSocialLink>
            <StyledSocialLink href="https://codepen.io/marcinboczkowski/">
                <StyledSocialLinkIcon src={githubIco} alt="github icon" />
            </StyledSocialLink>
        </StyledMenuSogial>
    );
}

export default MenuSocial;