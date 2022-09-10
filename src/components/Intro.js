import styled from "styled-components"
const Intro = props =>{
    return(
        <Wrap>
            <Name>
                <h1>Edgardo <span>Díaz</span></h1>
            </Name>
            <Content>
                <img src="./img/astronaut.png"></img>
                <h2>Front End </h2>
                <h2>UX / UI</h2>
            </Content>
        </Wrap>
    )
}
const Name = styled.div`
    align-self: center;
    font-size: 60px;
    font-weight: 700;
    h1{
        line-height: 70px;
    }
    span{
        display: block;
    }
    &:after{
        content: '';
        display: block;
        width: 30%;
        height: 9px;
        margin-top: 20px;
        background-color: #371a45;
    }
`
const Content = styled.div`
align-self: center;
text-align: left;
h2{
    font-size: 2rem;
}
img{
    width: 250px;
}
`

const Wrap = styled.section`
    background-color: #81b1ff;
    width: 90%;
    padding: 50px 10%;
    color: #fff;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;

`
export default Intro