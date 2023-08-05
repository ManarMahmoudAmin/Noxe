import React, { useContext } from 'react'
import { MediaContext } from '../../Context/MediaContext'

export default function Sidebar({media_type}) {
 let {getCategory, search} = useContext(MediaContext);
 return (
    <>
        <div className='sidebar px-2 col-md-2'>
          <div className='p-0'>
          <input type="search" onChange={search} media_type={media_type} aria-label='Search' className='form-control text-white bg-transparent mb-4' placeholder='Search...'/>
            <div>
              
              {media_type !=='person'? <> <p className='cursor my-4' onClick={getCategory} id='top_rated'>Top Rated</p>
              <p className='cursor my-4' onClick={getCategory} id='popular'>Popular</p> </>
              : ''}
              {media_type =='movie'? <>
              <p className='cursor my-4' onClick={getCategory} id='upcoming' media_type='movie'>Upcoming</p>
              <p className='cursor my-4' onClick={getCategory} id='now_playing' media_type='movie'>Now Playing</p>
              </>: ''}
              {media_type =='tv'? <>
              <p className='cursor my-4' onClick={getCategory} id='on_the_air' media_type='tv'>On The Air</p>
              <p className='cursor my-4' onClick={getCategory} id='airing_today' media_type='tv'>Airing Today</p>
              </>: ''}
            </div>
          </div>
      </div> 
    </>
  )
}
