import React from 'react'
import { Link } from 'react-router-dom'


export default function MediaItem({item, media_type}) {
  return (
    <> 
      <div className="col-md-2 col-sm-3">
        <Link to={`/itemdetails/${item.id}/${media_type}`}>
            <div className='position-relative'>
              {item.poster_path? <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+item.poster_path} alt=""/> :''}
              {item.profile_path?<img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+item.profile_path} alt="" />:''}
              {item.vote_average  &&
               <div className='position-absolute top-0 end-0 p-1 px-2 bg-info text-white'>{item.vote_average?.toFixed(1)}</div>} 
              <h4 className='h6 mt-2 mb-3 text-center text-white'>{item.title}{item.name}</h4>
            </div>      
        </Link>
      </div>
    </>
  )
}
