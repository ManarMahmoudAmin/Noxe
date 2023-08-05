import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ItemDetails({}) {
  let { id, media_type } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [itemDetails, setItemDetails] = useState({});
  const[isExpanded, setIsExpanded] = useState(false);
  
  async function getItemDetails(id, media_type) {
    setIsLoading(true);
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=094bf4cb0dc61bafc23f732e78c9072d&languages=en-US`
    );
    setItemDetails(data);
    setIsLoading(false);
  }
  function toggleMore() {
    setIsExpanded(!isExpanded);
  }

  useEffect(() => {
    getItemDetails(id, media_type);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{itemDetails.title?itemDetails.title : itemDetails.name}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
     
      <div className="row m-5 my-5">
      {isLoading === true? <div className="d-flex justify-content-center align-items-5enter">
          <div id='spinner' className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>:
          <>
          <div className="col-md-3 col-sm-5 mb-3">
          {itemDetails.poster_path? <img className='w-100 ' src={`https://image.tmdb.org/t/p/w500/`+itemDetails.poster_path} alt=""/> : ''}
          {itemDetails.profile_path? <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+itemDetails.profile_path} alt="" />: ''}  
        </div>
        <div className="col-md-9 col-sm-7">
          <h3 className="pb-2">
            {itemDetails.original_title} {itemDetails.name}
          </h3>
          {media_type === "person" ? (
            <>
              <p className="text-info">{itemDetails.known_for_department}</p>
              
              <h5 className="text-white-50">
                <span>{String(itemDetails.biography).split(',').join().slice(0,450)}</span>
                <span>{isExpanded && String(itemDetails.biography).split(',').join().slice(450)}</span>
                {String(itemDetails.biography).length !== 0  && 
                <a className="cursor text-white fs-6" onClick={toggleMore}>{isExpanded? ' Read Less' : '...Read More'}</a>} 
              </h5>
            </>
          ) : (
            <>
              <h5 className="text-white-50">{itemDetails.tagline}</h5>
              {itemDetails.genres?itemDetails.genres.map((el, id)=> <span key={id} className="stop-cursor btn btn-info btn-sm text-white me-3 my-3">{el.name}</span>):''}
              <p className="my-3">
                Vote : {itemDetails.vote_average?.toFixed(1)}
              </p>
              <p className="my-3">
                Vote count : {itemDetails.vote_count}
              </p>
              <p className="my-3">
                Popularity : {itemDetails.popularity}
              </p>
              {itemDetails.release_date ?
                <p className="my-3">
                Release date : {itemDetails.release_date}
              </p>:''}
              <h6 className="text-white-50 my-4">{itemDetails.overview}</h6>
            </>
          )}
        </div>
          </>
          }
        
      </div>
    </>
  );
}
