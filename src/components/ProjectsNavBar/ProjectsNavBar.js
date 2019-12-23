import React from 'react'
import styled from 'styled-components'
import ScrollspyNav from "react-scrollspy-nav";

const data = [
    {
        id: 'gamesDatabase',
        label: 'Games database',
        href: '#gamesDatabase'
    },
    {
        id: 'reclamations',
        label: 'Reclamations',
        href: '#reclamations'
    },
    {
        id: 'weather',
        label: 'Weather App',
        href: '#weather'
    },
    {
        id: 'returnGenerator',
        label: 'Return PDF generator',
        href: '#returnGenerator'
    },
]

const StyledSectionBar = styled.div`
    position: fixed;
    z-index: 1;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    background-color: transparent;
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

const ProjectsNavBar = () => {

    const sectionList = data.map((e, i) => {
        if (i === 0) {
            return (
                <StyledSectionBarElement>
                    <StyledSectionBarAnchorFirst className="is-active" href={e.href}>
                        <StyledCircleLabel>{e.label}</StyledCircleLabel>
                        <StyledSectionBarSpan />
                    </StyledSectionBarAnchorFirst>
                </StyledSectionBarElement>
            )
        }
        if (i < data.length - 1) {
            return (
                <StyledSectionBarElement>
                    <StyledSectionBarAnchor href={e.href}>
                        <StyledCircleLabel>{e.label}</StyledCircleLabel>
                        <StyledSectionBarSpan />
                    </StyledSectionBarAnchor>
                </StyledSectionBarElement>
            )
        }
        if (i === data.length - 1) {
            return (
                <StyledSectionBarElement>
                    <StyledSectionBarAnchorLast href={e.href}>
                        <StyledCircleLabel>{e.label}</StyledCircleLabel>
                        <StyledSectionBarSpan />
                    </StyledSectionBarAnchorLast>
                </StyledSectionBarElement>
            )
        }
    });

    return (
        <StyledSectionBar>
            <StyledSectionBarWrapper scrollTargetIds={data.map(e => e.id)} activeNavClass="is-active" scrollDuration='500' >
                <StyledSectionBarList>
                    {sectionList}
                </StyledSectionBarList>
            </StyledSectionBarWrapper>
        </StyledSectionBar>
    );
}

export default ProjectsNavBar;
