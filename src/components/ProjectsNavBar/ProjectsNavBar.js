import React from 'react'
import styled from 'styled-components'
import ScrollspyNav from "react-scrollspy-nav";

const StyledSectionBar = styled.div`
    position: fixed;
    z-index: 1;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    background-color: transparent;
    @media ${({ theme }) => theme.device.tablet}{
        display: none;
    }
`;

const StyledSectionBarWrapper = styled(ScrollspyNav)`
`;

const StyledSectionBarList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
`;

const StyledSectionBarElement = styled.li` 
    margin-bottom: 34px;
`;

const StyledCircleLabel = styled.span`
    text-align: right;
    position: absolute;
    left: -160px;
    top: -3px;
    font-size: .8rem;
    -webkit-transition: color .5s;
    transition: color .5s;
    width: 150px;
    transition: color .5s;
`;


const StyledSectionBarAnchor = styled.a`
    padding-right: 12px;
    margin: 13px 0;
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: 3px solid ${({ theme }) => theme.colors.elements};
    border-radius: 50%;
    position: relative;
    transition: border .5s;  
    color: transparent;
    &.is-active {
        border: 3px solid ${({ theme }) => theme.colors.border};
    }
    &.is-active ${StyledCircleLabel}{
        color: ${({ theme }) => theme.colors.elements};
    }
    &:before{
        content: "";
        position: absolute;
        height: 30px;
        border-right: 2px solid ${({ theme }) => theme.colors.brightElements};
        top: -31px;
        right: 5px;
        width: 1px;
    }  
    &:hover{
        border: 3px solid ${({ theme }) => theme.colors.border};
        cursor: pointer;
    }
    &:hover ${StyledCircleLabel}{
        color: ${({ theme }) => theme.colors.elements};
    }
`;

const StyledSectionBarSpan = styled.span``;

const StyledSectionBarAnchorFirst = styled(StyledSectionBarAnchor)`
    &:before{
        content: "";
        position: absolute;
        height: 30px;
        border-right: 2px solid ${({ theme }) => theme.colors.brightElements};
        top: -31px;
        right: 5px;
        width: 1px;
    }
`;

const StyledSectionBarAnchorLast = styled(StyledSectionBarAnchor)`
    &::before, &::after{
        content: "";
        position: absolute;
        height: 30px;
        border-right: 2px solid ${({ theme }) => theme.colors.brightElements};
        top: -31px;
        right: 5px;
        width: 1px;
    }
    &::after{
        height: 30px;
        border-right: 2px solid ${({ theme }) => theme.colors.brightElements};
        top: 14px;
    }
`;

const ProjectsNavBar = ({ data }) => {
    const sectionList = data.map((e, i) => {
        const { href, title } = e.node
        if (i === 0) {
            return (
                <StyledSectionBarElement key={title}>
                    <StyledSectionBarAnchorFirst className="is-active" href={href}>
                        <StyledCircleLabel>{title}</StyledCircleLabel>
                        <StyledSectionBarSpan />
                    </StyledSectionBarAnchorFirst>
                </StyledSectionBarElement>
            )
        }
        if (i < data.length - 1) {
            return (
                <StyledSectionBarElement key={title}>
                    <StyledSectionBarAnchor href={href}>
                        <StyledCircleLabel>{title}</StyledCircleLabel>
                        <StyledSectionBarSpan />
                    </StyledSectionBarAnchor>
                </StyledSectionBarElement>
            )
        }
        if (i === data.length - 1) {
            return (
                <StyledSectionBarElement key={title}>
                    <StyledSectionBarAnchorLast href={href}>
                        <StyledCircleLabel>{title}</StyledCircleLabel>
                        <StyledSectionBarSpan />
                    </StyledSectionBarAnchorLast>
                </StyledSectionBarElement>
            )
        }
    });

    return (
        <StyledSectionBar>
            <StyledSectionBarWrapper scrollTargetIds={data.map(e => e.node.idText)} activeNavClass="is-active" scrollDuration='500' offset={2} >
                <StyledSectionBarList>
                    {sectionList}
                </StyledSectionBarList>
            </StyledSectionBarWrapper>
        </StyledSectionBar>
    );
}

export default ProjectsNavBar;
