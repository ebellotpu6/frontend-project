import React from 'react';

import { CharacterDetails, FilmDetails, SpecieDetails, StarshipDetails, VehicleDetails, PlanetDetails } from '..';

const index = ({ type, objectData }) => {
    return (
        <>
            <div className='nameObject'>{(type === "films") ? `Episode ${objectData.episode_id}: ${objectData.title}` : objectData.name}</div>
            { (type === "people") ? 
            <CharacterDetails {...objectData}></CharacterDetails> : (type === "films") ? 
            <FilmDetails {...objectData}></FilmDetails> : (type === "species") ? 
            <SpecieDetails {...objectData}></SpecieDetails> : (type === "starships") ? 
            <StarshipDetails {...objectData}></StarshipDetails> : (type === "vehicles") ? 
            <VehicleDetails {...objectData}></VehicleDetails> : (type === "planets") ? 
            <PlanetDetails {...objectData}></PlanetDetails> : ""
            }      
        </>
    )
}

export default index