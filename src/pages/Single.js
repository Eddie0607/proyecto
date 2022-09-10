import { useState, useEffect } from "react"
import BigLoader from "../components/BigLoader"
import * as contentful from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useParams } from "react-router-dom"
import Job from "../components/Job"

const Single = props => {
    let { id } = useParams();
    var client = contentful.createClient(
        {
          space: 'qapgt8rvz2g3',
          accessToken: 'WCbuj49oveiIh68XaVhlNhIN7mCVPndINO5KAKKQfx0' 
        }
      )
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)
      useEffect(()=>{
        client.getEntry(id)
          .then(entry => {
            let richTextContent = documentToHtmlString(entry.fields.content)
            entry.fields.richTextContent = richTextContent
            setData(entry)
            setIsLoading(false)
          })
          .catch(err=>{
            console.log(err)
          })
      },[])
    return(<>
            {isLoading &&
                <BigLoader /> 
             }
             {!isLoading &&
                <Job {...data.fields} />
             }
        
        </>)
}
export default Single