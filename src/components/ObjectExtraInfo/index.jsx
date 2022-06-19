import React from 'react'

import { ExtraInfo } from '..';

import './index.css';

const index = ({ type, objectData }) => {
    return (
        <>
            {(type === "people") ? 
                <>
                    <ExtraInfo title="Related Films" type="films" objects={objectData.films}></ExtraInfo>
                    <ExtraInfo title="Related Vehicles" type="vehicles" objects={objectData.vehicles}></ExtraInfo>
                    <ExtraInfo title="Related Starships" type="starships" objects={objectData.starships}></ExtraInfo>
                </> : (type === "films") ? 
                <>
                    <ExtraInfo title="Related Characters" type="characters" objects={objectData.characters}></ExtraInfo>
                    <ExtraInfo title="Related planets" type="planets" objects={objectData.planets}></ExtraInfo>
                    <ExtraInfo title="Related Vehicles" type="vehicles" objects={objectData.vehicles}></ExtraInfo>
                    <ExtraInfo title="Related Starships" type="starships" objects={objectData.starships}></ExtraInfo>
                    <ExtraInfo title="Related Species" type="species" objects={objectData.species}></ExtraInfo>
                </> : (type === "species") ? 
                <>
                    <ExtraInfo title="Related Films" type="films" objects={objectData.films}></ExtraInfo>
                    <ExtraInfo title="Related Characters" type="characters" objects={objectData.people}></ExtraInfo>
                </> : (type === "starships" || type === "vehicles") ? 
                <>
                    <ExtraInfo title="Related Films" type="films" objects={objectData.films}></ExtraInfo>
                    <ExtraInfo title="Related Pilots" type="characters" objects={objectData.pilots}></ExtraInfo>
                </> : (type === "planets") ? 
                <>
                    <ExtraInfo title="Related Films" type="films" objects={objectData.films}></ExtraInfo>
                    <ExtraInfo title="Related Residents" type="characters" objects={objectData.residents}></ExtraInfo>
                </> : "" 
            }
        </>
    )
}

export default index