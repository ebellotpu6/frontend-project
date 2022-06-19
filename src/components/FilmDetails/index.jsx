import React from 'react';

import './index.css';

const index = ({ release_date, director, producer, opening_crawl }) => {
  return (
    <>                  
        <div><b>Release Date:</b> {release_date}</div>
        <div><b>Director:</b> {director}</div>
        <div><b>Producer:</b> {producer}</div>
        <div><b>Opening crawl:</b> {opening_crawl}</div>
    </> 
  )
}

export default index