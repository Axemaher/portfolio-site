import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'
import Menu from '../components/Menu/Menu'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
  }
  *, *::before, *::after{
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  font-size:62.5%;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const StyledPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
  @media ${({ theme }) => theme.device.laptopL}{
    max-width: 1440px;
    padding: 0 40px;
  }
  @media ${({ theme }) => theme.device.tablet}{
        width: 100vw;
        padding: 0 20px;
  }
  @media ${({ theme }) => theme.device.mobileL}{
        padding: 0 10px;
    }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>
        <StyledPage>
          <Menu />
          {children}
        </StyledPage>
      </StyledWrapper>
    </>
  </ThemeProvider>
)

export default Layout