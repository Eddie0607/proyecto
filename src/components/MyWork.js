import { useEffect, useState } from 'react';
import styled from 'styled-components';
import WorkCard from './WorkCard';
import WorkLoadingCard from './WorkLoadingCard';
import * as contentful from 'contentful';
const MyWork = () => {
    var client = contentful.createClient(
      {
        space: 'qapgt8rvz2g3',
        accessToken: 'WCbuj49oveiIh68XaVhlNhIN7mCVPndINO5KAKKQfx0' 
      }
    )
    const [isLoading , setIsLoading] = useState(true);
    const [data, setData] = useState([])
    useEffect(()=>{
      console.log('Estoy iniciando mi componente')
      client.getEntries({limit:3,  content_type: 'job'})
        .then(entries => {
          setData(entries.items)
          setIsLoading(false)
        })
        .catch(err=>{
          console.log(err)
        })
    },[])
    return(
      <Wrap>
        <h1>My Work</h1>
        <WorkGrid>
          {isLoading &&
            <>
              <WorkLoadingCard />
              <WorkLoadingCard />
              <WorkLoadingCard />
            </> 
          }
          {!isLoading && 
            data.map((entry,index)=>{
              return(<WorkCard key={entry.sys.id} entry={entry} />)
            })
          }
        </WorkGrid>
      </Wrap>
    )
  }

const Wrap = styled.section`
    background-color: #81b1ff;
    width: 90%;
    padding: 50px 10%;
    color: #fff;
   min-height: 650px;
   h1{
        text-align: center;
        margin-bottom: 50px;
        font-size: 2rem;
    }
`
const WorkGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:30px;
` 
export default MyWork;