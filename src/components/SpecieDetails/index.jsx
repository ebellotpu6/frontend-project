import React from 'react';

import { ObjectLink } from '..';

import './index.css';

const index = ({ classification, designation, language, average_lifespan, average_height, skin_colors, hair_colors, eye_colors, homeworld }) => {
  return (
    <>           
        <div><b>Classification:</b> {classification}</div>
        <div><b>Designation:</b> {designation}</div>
        <div><b>Language:</b> {language}</div>
        <div><b>Avg. Lifespan:</b> {average_lifespan} years</div>
        <div><b>Avg. Height:</b> {average_height} cm</div>
        <div><b>Skin color(s):</b> {skin_colors}</div>
        <div><b>Hair color(s):</b> {hair_colors}</div>
        <div><b>Eye color(s):</b> {eye_colors}</div>
        {(homeworld === null) ? "" : <div><b>Homeworld:</b> <ObjectLink url={homeworld} type="planets"></ObjectLink></div> }
    </>
  )
}

export default index