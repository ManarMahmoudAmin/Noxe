import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let MediaContext = createContext(null);

function MediaContextProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [tvList, setTvList] = useState([]);
  const [peopleList, setPeopleList] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [currentCategory, setCurrentCategory] = useState('popular');

  async function getData(mediaType, category='popular',pageNum=1, callback) {
    setIsLoading(true);
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${category}?api_key=094bf4cb0dc61bafc23f732e78c9072d&page=${pageNum}`
    );    
    callback(data.results);
    setIsLoading(false);

  }

  function getPageNum(page, media_type) {
    if(media_type === 'movie')
    getData('movie',currentCategory, page,setMoviesList);
    else if(media_type === 'tv')
    getData('tv',currentCategory, page,setTvList);
    else
    getData('person',currentCategory, page, setPeopleList)
  }
  
  function getCategory(e) {
    let category = e.target.id;
    setCurrentCategory(category);
    if( category == 'upcoming' || category == 'now_playing' || category == 'top_rated' || category == 'popular')
    getData('movie',category,1, setMoviesList);
    if(category == 'airing_today' || category == 'on_the_air' || category == 'top_rated' || category == 'popular')
    getData('tv',category,1, setTvList);
  }
  
  function search(e) {
    let value = {...inputVal};
    value = e.target.value;
    setInputVal(value);
    let media_type = e.target.getAttribute('media_type');
    if(inputVal !=='') {
      setIsLoading(true);
      getSearchData(media_type, inputVal)
      setIsLoading(false);

    }
    else {
      return;
    }
  }

  async function getSearchData(media_type, value) {

    let {data} = await axios.get(`https://api.themoviedb.org/3/search/${media_type}?api_key=094bf4cb0dc61bafc23f732e78c9072d&language=en-US&query=${value}&page=1&include_adult=false`)
    if(media_type === 'movie')
      setMoviesList(data.results);
    if(media_type === 'tv')
      setTvList(data.results);
    else
      setPeopleList(data.results);

  }
  useEffect(() => {
    getData('movie', 'popular',1, setMoviesList);
    getData('tv', 'popular',1, setTvList);
    getData('person', 'popular',1, setPeopleList);
   
}, [])

  useEffect(() => {
    getData('movie', 'popular',1, setMoviesList);
    getData('tv', 'popular',1, setTvList);
    getData('person', 'popular',1, setPeopleList);
  }, []); 
  return (
    <MediaContext.Provider
      value={{ moviesList, tvList, peopleList, getCategory,search, getPageNum, isLoading, setIsLoading }}
    >
      {props.children}
    </MediaContext.Provider>
  );
}
export default MediaContextProvider;
