import styled from "styled-components"
import { skillsData } from "../components/skillsData"
import SkillCard from "./SkillCard"
const Skills = props => {
    return(
        <Wrap>
            <h1>My Skills</h1>
            <SkillGrid>
                {skillsData.map(skill => {
                    return <SkillCard key={skill.name} {...skill}/>
                })}
            </SkillGrid>
        </Wrap>
    )
}

const Wrap = styled.section`
    background-color: #f5f5f5;
    width: 90%;
    padding: 50px 10%;
    color: #81b1ff;
    min-height: 650px;
    h1{
        text-align: center;
        margin-bottom: 50px;
        font-size: 2rem;
    }
`
const SkillGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 60px;
`

export default Skills