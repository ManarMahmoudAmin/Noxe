import { useContext } from 'react';
import { Helmet } from 'react-helmet'
import MediaItem from '../MediaItem/MediaItem'
import { MediaContext } from '../../Context/MediaContext';
import Pagination from '../Pagination/Pagination';
import Sidebar from '../Sidebar/Sidebar';

export default function Tv() {
  let {tvList} = useContext(MediaContext);  

  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Tv shows</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div className='row pt-5 mx-5'>
      <Sidebar media_type='tv'/>
        <div className='col-md-10 '>
          <div className="row gx-3">
          {tvList.filter((tv)=> tv.poster_path !== null).slice(0,18).map((item, index) => <MediaItem key={index} item={item} media_type='tv'/>)}
          </div>
        </div>
      </div>
      <Pagination media_type='tv'/>
    </>
  )
}
