import {useEffect,useState} from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';


export const GifGrid = ({x}) => {

    const [images, setimages] = useState([]);

    
  
    useEffect(() => {
      getGifs(x)
        .then(newImages => setimages(newImages) );
    }, [])
    

    

  return (
    <>
    <h3>{x}</h3>

    <div className='card-grid'>

      {
        images.map( (image) => (
          <GifItem key={image.id} {...image} />
          
        ))
      }
     
      
    </div>
     
    </>
  )
}
