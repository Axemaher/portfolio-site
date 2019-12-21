import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components'
import MenuButton from './MenuButton'
import magnetizeAnimation from '../../utils/magnetizeAnimation'
import { useStaticQuery, graphql } from "gatsby"
import MenuSocial from './MenuSocial'
import logo from '../../images/logo-ico.png'

const StyledMenuContainer = styled.div`
    position: fixed;
    left:0;
`;

const StyledMenu = styled.nav`
    background-color: ${({ theme }) => theme.colors.background};
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.font};
    display: grid;
    grid-template-rows: 15% 65% 20%;
    height: 100vh;
    transform: translateX${({ menuOpen }) => menuOpen ? '(0)' : '(-100vw)'};
    position: absolute;
    top: 0;
    width: 460px;
    transition: all 0.2s ease;
    @media ${({ theme }) => theme.device.mobileL} {
        width: 100vw;
    }
`;

const StyledLogoContainer = styled(Link)`
    display: grid;
    place-self: center;
    justify-items: center;
`;

const StyledLogo = styled.img`
    width: 100px;
`;

const StyledMenuLinks = styled.ul`
    font-size: 2rem;
    list-style: none;
    display: grid;
    place-self: center;
    justify-items: start;
    padding: 20px 0 0 50px;
    justify-self: start;
`;


const StyledMenuLinkLabel = styled.span`
    position: absolute;
    left: -10px;
    bottom: 20px;
    font-size: .6rem;
    transition: .1s;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.font};
    transition: .2s;
`;

const StyledMenuLink = styled.li`
    position: relative;
    padding: 10px;
    transition: .2s;
    color: ${({ theme }) => theme.colors.font};
    &:hover{
        transform: translateX(10px);
        color: ${({ theme }) => theme.colors.border};
    }
    &:hover ${StyledLink} {
        color: ${({ theme }) => theme.colors.border};
    }
`;



const Menu = ({ location }) => {

    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        magnetizeAnimation("menu-button", 120)
    }, [])

    const data = useStaticQuery(graphql`
    query menuLinks {
      site {
        siteMetadata {
            menuLinks {
              name
              link
            }
          }
      }
    }
  `)
    console.log(location)
    return (
        <StyledMenuContainer>
            <MenuButton setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
            <StyledMenu menuOpen={menuOpen}>
                <StyledLogoContainer to='/'>
                    <StyledLogo src={logo} alt="logo" />
                </StyledLogoContainer>
                <StyledMenuLinks>
                    {data.site.siteMetadata.menuLinks.map((menuLink, i) => (
                        <StyledMenuLink key={menuLink.name}>
                            <StyledMenuLinkLabel>{`0${i + 1}`}</StyledMenuLinkLabel>
                            <StyledLink to={menuLink.link} propsss='12432' >{menuLink.name}</StyledLink>
                        </StyledMenuLink>
                    ))}
                </StyledMenuLinks>
                <MenuSocial />
            </StyledMenu>
        </StyledMenuContainer>
    );
}


export default Menu;
