import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem';
import Title from '../Title/Title';
import { Helmet } from 'react-helmet';
import axios from 'axios';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [tvList, setTvList] = useState([]);
  const [peopleList, setPeopleList] = useState([]);

  async function getData(mediaType, callback) {
    setIsLoading(true);
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=094bf4cb0dc61bafc23f732e78c9072d`
    );
    callback(data.results);
    setIsLoading(false);  
  }

  useEffect(() => {
    getData("movie", setMoviesList);
    getData("tv", setTvList);
    getData("person", setPeopleList);
  }, []);
  
  return ( 
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      {isLoading === true? <div className="d-flex justify-content-center align-items-center">
          <div id='spinner' className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          </div>:<>
          <div className='row pt-5 mx-5'>
          <Title mediaTitle={'Movies'}/>
          {moviesList.slice(0,10).map((item, index) => <MediaItem key={index} item={item} media_type='movie'/>)}
        </div>        
        <div className='row pt-2 mx-5'>
          <Title mediaTitle={'Tv'}/>
          {tvList.slice(0,10).map((item, index) => <MediaItem key={index} item={item} media_type='tv'/>)}
        </div>
        <div className='row pt-2 mx-5'>
          <Title mediaTitle={'People'}/>
          {peopleList.filter((person)=>person.profile_path !== null).slice(0,10).map((item, index) => <MediaItem key={index} item={item} media_type='person'/>)}
        </div>
        </>
      }
    </>
  )
}
