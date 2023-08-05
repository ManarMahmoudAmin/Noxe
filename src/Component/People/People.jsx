import { useContext } from 'react';
import { Helmet } from 'react-helmet'
import MediaItem from '../MediaItem/MediaItem'
import { MediaContext } from '../../Context/MediaContext';
import Sidebar from '../Sidebar/Sidebar';
import Pagination from '../Pagination/Pagination';

export default function People() {
  let {peopleList} = useContext(MediaContext);  

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Actors</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className='row pt-5 mx-5'>
      <Sidebar media_type='person'/>
        <div className='col-md-10 '>
          <div className="row gx-3">
          {peopleList.filter((person)=>person.profile_path !== null).slice(0,18).map((item, index) => <MediaItem key={index} item={item} media_type='person'/>)}
          </div>
        </div>
      </div>
      <Pagination media_type='person'/>
    </>
  )
}
