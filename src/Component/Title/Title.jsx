import React from 'react'

export default function Title({mediaTitle}) {
  return (
    <>
      <div className=" col-md-4 col-sm-6 d-flex align-items-center">
        <div className='w-100'>
          <div className="brdr w-25 mb-2"></div>
              <h2 className='h4 '>Trending <br/> {mediaTitle} <br/> to watch now</h2>
              <p className='text-white-50'>Most watched movies by days</p>
          <div className="brdr w-100 my-2"></div>
        </div>
      </div>
    </>
  )
}
