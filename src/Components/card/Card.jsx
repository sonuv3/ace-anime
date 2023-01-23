
import React  from 'react'
import './card.scss'
const Card = ({animelist}) => {
 return(
  <>
  {
    animelist?(
      animelist.map((anime,index)=>{
        return(
          <div className='card-wrapper'>
          <img src={anime.images.jpg.large_image_url} alt="animeimg" />
            <h3>{anime.title}</h3>

        </div>
          )

      })
    ):"not found"
  }

  </>
 )

 }

export default Card
