import React from "react"
import Layout from '../Layout/layout'
import PageInfo from '../components/PageInfo/PageInfo'
import ProjectsNavBar from '../components/ProjectsNavBar/ProjectsNavBar'
import styled from 'styled-components'
import Img from "gatsby-image"
import 'gatsby-image/withIEPolyfill'

const StyledProjectsWrapper = styled.div`
    display: block;
    width: 100vw;
`;

const StyledSection = styled.section`
    width: 100%;
    margin: 0 auto;
    padding-top: 200px;
    max-width: 1200px;
    min-height: 105vh;
    display: grid;
    font-size: 1.5em;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.2fr 1.8fr;
    grid-template-areas: "title title" "image description";
    @media ${({ theme }) => theme.device.tablet}{
        grid-template-columns: 1fr;
        grid-template-rows: auto auto 70vw;
        grid-template-areas: "title" "description" "image";
        padding-top: 70px;
    }
`;

const StyledHeader = styled.header`
    padding: 20px 0;
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;
    grid-template-rows: 1fr;
    grid-template-areas: "title links";
    grid-area: title;
    @media ${({ theme }) => theme.device.mobileL} {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas: "title" "links";
    }
`;

const StyledHeaderTitle = styled.div``;

const StyledTitleH2 = styled.h2`
    grid-area: title;
    position: relative;
    font-size: 3em;
    margin: 10px 0 10px 20px;
    line-height: .8em;
    @media ${({ theme }) => theme.device.tablet} {
        margin: 10px 0 10px 0;
    }
`;

const StyledTitleLabel = styled.span`
    position: absolute;
    left: -20px;
    font-size: .3em;
    top: .9em;
    @media ${({ theme }) => theme.device.tablet} {
        display: none;
    }
`;

const StyledSubtitle = styled.span`
    margin: 20px;
    @media ${({ theme }) => theme.device.tablet} {
        margin: 0;
    }
`;

const StyledLinks = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
`;

const StyledLink = styled.a`
    margin: 10px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;  
`;

const StyledDescription = styled.div`
    grid-area: description;
    padding-left: 10px;  
    @media ${({ theme }) => theme.device.tablet} {
        padding-left: 0; 
    }
`;

const StyledListTitle = styled.p``;

const StyledDescriptionList = styled.ul`
    list-style: none;
`;

const StyledTechnologiesList = styled.ul`
    list-style: none;
    display: flex;
    padding-left: 0;
`;

const StyledPointedElement = styled.li`
    position: relative;
    margin-bottom: 5px;
    &:before{
        position: absolute;
        content: "";
        width: 10px;
        height: 10px;
        border: 2px solid #88c4e2;
        border-radius: 50%;
        left: -16px;
        top: .3em;
    }
`;

const StyledTechnologiesLabel = styled.span`
    position: absolute;
    background-color: red;
    bottom: -5px;
    left: 14px;
    padding: 2px 6px;
    opacity: 0;
    transition: opacity .5s;
`;

const StyledTechnologiesElement = styled.li`
    position: relative;
    &:hover ${StyledTechnologiesLabel}{
        opacity: 1;
    }
`;

const StyledTechnologiesIcon = styled.img`
    height: 26px;
    margin: 10px;
`;

const StyledImage = styled(Img)`
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
`;

const Projects = ({ data }) => {
    console.log(data)
    return (
        <>
            <Layout>
                <PageInfo>projects</PageInfo>
                <ProjectsNavBar data={data.allContentfulProjects.edges} />
                <StyledProjectsWrapper>
                    {data.allContentfulProjects.edges.map((project, i) => (
                        <StyledSection id={project.node.idText} key={i}>
                            <StyledHeader>
                                <StyledHeaderTitle>
                                    <StyledTitleH2>
                                        {project.node.title}
                                        <StyledTitleLabel>{`0${i + 1}`}</StyledTitleLabel>
                                    </StyledTitleH2>
                                    <StyledSubtitle>{project.node.subtitle}</StyledSubtitle>
                                </StyledHeaderTitle>
                                <StyledLinks>
                                    <StyledLink href={project.node.live}><Img fixed={data.link.childImageSharp.fixed} alt="xx" /></StyledLink>
                                    <StyledLink href={project.node.code}><Img fixed={data.github.childImageSharp.fixed} alt="xx" /></StyledLink>
                                </StyledLinks>
                            </StyledHeader>
                            <StyledDescription>
                                <StyledListTitle>The following functions have been implemented:</StyledListTitle>
                                <StyledDescriptionList>
                                    {project.node.functions.map(e => (
                                        <StyledPointedElement key={e}>{e}</StyledPointedElement>
                                    ))}
                                </StyledDescriptionList>
                                <StyledListTitle>Technologies:</StyledListTitle>
                                <StyledDescriptionList>
                                    {project.node.technologies.map(e => (
                                        // <StyledTechnologiesElement key={e}>
                                        //     <StyledTechnologiesIcon src={'https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-512.png'}></StyledTechnologiesIcon>
                                        //     <StyledTechnologiesLabel>{e}</StyledTechnologiesLabel>
                                        // </StyledTechnologiesElement>
                                        <StyledPointedElement key={e}>{e}</StyledPointedElement>
                                    ))}
                                </StyledDescriptionList>
                            </StyledDescription>
                            <StyledImage
                                fluid={project.node.image.fluid}
                                imgStyle={{ objectFit: 'contain', objectPosition: 'top' }}
                                alt="image"
                            ></StyledImage>
                        </StyledSection>
                    ))}
                </StyledProjectsWrapper>
            </Layout>
        </>
    )
}

export default Projects

export const query = graphql`
    query projects {
      allContentfulProjects{
        edges{
          node{
            id
            href 
            idText
            title
            subtitle
            functions
            technologies
            live
            code
            image {
              id
              title
              fluid(maxWidth: 1000, quality: 100){
                sizes
                src
              }
            }
          }
        }
      }
      github: file(relativePath: { eq: "images/github-ico.png" }) {
        childImageSharp {
            fixed(width: 30, height: 30) {
                ...GatsbyImageSharpFixed
            }
        }
      }
      link: file(relativePath: { eq: "images/link-ico.png" }) {
        childImageSharp {
            fixed(width: 30, height: 30) {
                ...GatsbyImageSharpFixed
            }
        }
      }
    }
`