import React from "react"
import Layout from '../Layout/layout'
import H1 from '../components/H1'
import PageInfo from '../components/PageInfo/PageInfo'
import ProjectsNavBar from '../components/ProjectsNavBar/ProjectsNavBar'
import styled from 'styled-components'

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

const StyledSection = styled.section`
    min-height: 130vh;
    margin-bottom: 50px;
`;

const Projects = () => (
    <>
        <Layout>
            <PageInfo>projects</PageInfo>
            <H1>Projects</H1>
            <ProjectsNavBar />
            <div>
                {data.map(e => (
                    <StyledSection id={e.id} ><span>{e.label}</span></StyledSection>
                ))}
            </div>
        </Layout>
    </>
)

export default Projects