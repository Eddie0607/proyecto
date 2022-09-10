import styled from "styled-components"
import { Link } from "react-router-dom"
const WorkCard = props => {
    const { entry } = props
    return(
        <Wrap>
            <Image>
                
                <img src={entry?.fields?.thumbnail.fields.file.url} alt={entry.fields.title}/>
            </Image>
            <Data>
                <Date>
                    <span className="material-icons-outlined">calendar_month</span>
                    <p>{/* Junio 20, 2022 */}{entry.fields.creationDate}</p>
                </Date>
                    <Title>{entry.fields.title}</Title>
                    <Excerpt>{entry.fields.extract}
                    </Excerpt>
                    <ReadMore>
                        <Link to={`/entrada/${entry.sys.id}`}>Read more</Link>
                    </ReadMore>
            </Data>
        </Wrap>
    )
}
const Wrap = styled.div`
width: 100%;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`
const Image = styled.div`
width: 100%;
aspect-ratio: 16 / 9;
background-color: white;
position: relative;
img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
const Data = styled.div`
    padding: 10px;
`
const Date = styled.div`
 display: flex;
 align-items: center;
 span{
    font-size: 16px;
    margin-right: 5px ;
 }
`
const Title = styled.h4`
    font-size: 20px;
    margin-top: 17px;

`
const Excerpt = styled.div`
    margin-top: 9px;
    font-size: 16px;
    font-weight: 300;
`
const ReadMore = styled.div`
    display: flex;
    justify-content: flex-end;
    a{
        text-decoration: none;
        color: #fff;
        font-size: 14px;
        margin-top: 9px;
        
    }

`
export default WorkCard