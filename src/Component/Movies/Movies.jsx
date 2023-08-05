import { useContext } from 'react';
import { Helmet } from 'react-helmet'
import MediaItem from '../MediaItem/MediaItem'
import { MediaContext } from '../../Context/MediaContext';
import Pagination from '../Pagination/Pagination'
import Sidebar from '../Sidebar/Sidebar';

export default function Movies() {
  let {moviesList} = useContext(MediaContext);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movies</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className='row pt-5 mx-5'>
      <Sidebar media_type='movie'/>
        <div className='col-md-10 '>
          <div className="row gx-3">
            {moviesList.filter((movie)=> movie.poster_path !== null).slice(0,18).map((item, index)=> <MediaItem key={index} item={item} media_type='movie'/>)}
          </div>
        </div>
      </div>
      <Pagination media_type='movie'/>
    </>
  )
}
