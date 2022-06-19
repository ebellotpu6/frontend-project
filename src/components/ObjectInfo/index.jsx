import React from 'react';

import { InfoContent } from '..';

import './index.css';

const index = ({ id, type, objectData }) => {
    let img_api_type = type;
    if(type === "people") img_api_type = "characters";
    return (
        <>
            <div className='img-container '>
                <img className='image' src={`https://starwars-visualguide.com/assets/img/${img_api_type}/${id}.jpg`} 
                    onError={(e) => (e.target.onerror = null, e.target.src = (type === "starships" || type === "vehicles") ? "../../src/assets/default-short-image.jpg" : (type === "planets") ? "../../src/assets/default-middle-image.jpg" : "../../src/assets/default-image.jpg")}/>
            </div>
            <div className='info-content'>
                <InfoContent type={type} objectData={objectData}></InfoContent>       
            </div>
        </>
    )
}

export default index