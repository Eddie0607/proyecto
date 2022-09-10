import styled from "styled-components";
const SkillCard = props => {
    return(
        <Wrap>
            <Icon color={props.color}/>
            <h5>{props.name}</h5>
            <p>{props.level}%</p>
            <Loader quantity = {props.level} />
        </Wrap>
    )
}
const Wrap = styled.div`
width: 100%;
border: 1px solid #81b1ff;
padding: 20px;
border-radius: 10px;
position:relative;
h5{
    font-size: 1rem;
}
p{
    text-align: right;
}
`
const Loader = styled.div`
    width: 100%;
    height: 15px;
    border-radius: 10px;
    border: 1px solid #81b1ff;
    margin-top: 10px;
    position: relative;
    overflow: hidden;
    &:before{
        content: "";
        position: absolute;
        width: ${props => props.quantity}%;
        height: 100%;
        background-color: #81b1ff;
        
    }
`
const Icon = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
position: absolute;
background-color: ${props => props.color};
right: 20px;
top: 10px;
`
export default SkillCard;