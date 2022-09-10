import styled from "styled-components"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const WorkLoadingCard = props => {
    return(
        <SkeletonTheme baseColor="#81b1ff" highlightColor="#f1f1f1">
            <Wrap>
                <Image/>
                <Data>
                    <Date>
                        <Skeleton />
                    </Date>
                    <Title><Skeleton /></Title>
                    <Excerpt>
                        <Skeleton count={4} />
                    </Excerpt>
                    <ReadMore>
                        <Skeleton />
                    </ReadMore>
                </Data>
            </Wrap>
        </SkeletonTheme>
    )
}
const Wrap = styled.div`
width: 100%;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`
const Image = styled.div`
width: 100%;
aspect-ratio: 16 / 9;
background-color: #f5f5f5;
position: relative;

`
const Data = styled.div`
    padding: 10px;
`
const Date = styled.div`
 display: block
`
const Title = styled.h4`
    margin-top: 17px;

`
const Excerpt = styled.div`
    margin-top: 9px;
`
const ReadMore = styled.div`
    display: flex;
    justify-content: flex-end;
    span{
        width: 90px;
        
    }

`
export default WorkLoadingCard