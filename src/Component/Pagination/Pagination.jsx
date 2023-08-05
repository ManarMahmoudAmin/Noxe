import React, { useContext } from "react";
import { MediaContext } from "../../Context/MediaContext";

export default function Pagination({media_type}) {
  let {getPageNum} = useContext(MediaContext)
  let pageNum = new Array(10).fill('x').map((el, i) => i+1);
  
  return (
    <>
      <nav aria-label="..." className="d-flex justify-content-center my-3">
        <ul className="pagination pagination-sm">
          {pageNum.map((el) => (
            <li key={el} onClick={() => getPageNum(el, media_type)} className="page-item stop-cursor">
              <span className="page-link">{el}</span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}


