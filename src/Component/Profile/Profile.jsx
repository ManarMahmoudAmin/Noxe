import React from 'react'
import { Helmet } from 'react-helmet';

export default function Profile({userData}) {
  let {first_name, last_name, age, email} = userData;

  return (
  <>
    <Helmet>
      <meta charSet="utf-8" />
    <title>Profile</title>
    <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div className='py-4 mx-5'>
      <h5 className='pb-3'><span className='text-white-50'>Name : </span>{first_name} {last_name}</h5>
      <h5 className='pb-3'><span className='text-white-50'>Age : </span>{age}</h5>
      <h5 className='pb-3'><span className='text-white-50'>Email : </span>{email}</h5>
    </div>
  </>

  )
}
