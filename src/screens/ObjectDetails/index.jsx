import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import { Breadcrumb, ObjectLink, Loading, ExtraInfo }  from '../../components';

import './index.css';

const ObjectDetails = () => {
  const params = useParams();
  let type = params.type;
  if(type === "characters") type = "people";
  const [objectData, setObjectData] = useState(null);
  const [crumbs, setCrumbs] = useState([params.type]);

  const loadData = async () => {
    const response = await fetch(`https://swapi.dev/api/${type}/${params.id}`);
    const json = await response.json();
    setObjectData(json);
    setCrumbs([params.type, (params.type === "films") ?  json.title : json.name]);
  }

  useEffect(() => {
    loadData();
  }, []);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  if(objectData === null) {
    return (
      <div>
        <div className='main-container'>
          <div className='nav-content'>
            <nav className='nav-breadcrumb'>
              <Breadcrumb crumbs={ crumbs } />
            </nav>
          </div>
          <div className='searchResult'>
            <Loading />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className='main-container'>
        <div className='nav-content'>
          <nav className='nav-breadcrumb'>
            <Breadcrumb crumbs={ crumbs } />
          </nav>
        </div>
        <div className='main-content'>
          <div className='info-container'>
            <div className='img-container '>
              <img className='image' src={`https://starwars-visualguide.com/assets/img/${params.type}/${params.id}.jpg`} 
                  onError={(e) => (e.target.onerror = null, e.target.src = (type === "starships" || type === "vehicles") ? "../../src/assets/default-short-image.jpg" : (type === "planets") ? "../../src/assets/default-middle-image.jpg" : "../../src/assets/default-image.jpg")}/>
            </div>
            <div className='info-content'>
              <div className='nameObject'>{(type === "films") ? `Episode ${objectData.episode_id}: ${objectData.title}` : objectData.name}</div>
              { (type === "people") ? 
                <>
                  <div>Birth Year: {objectData.birth_year}</div>
                  <div>Spices: {(objectData.species || objectData.species.length === 0) ? 
                    "Unknow" : 
                    objectData.species.map((specie) => (
                      <ObjectLink key={specie} url={specie} type="species"></ObjectLink>
                    ))} 
                  </div>
                  <div>Height: {objectData.height} cm</div>
                  <div>Mass: {objectData.mass} Kg</div>
                  <div>Gender: {objectData.gender}</div>
                  <div>Skin color: {objectData.skin_color}</div>
                  <div>Hair color: {objectData.hair_color}</div>
                  <div>Eye color: {objectData.eye_color}</div>
                  <div>Homeworld: <ObjectLink url={objectData.homeworld} type="planets"></ObjectLink></div>
                </> : (type === "films") ? 
                <>                  
                  <div>Release Date: {objectData.release_date}</div>
                  <div>Director: {objectData.director}</div>
                  <div>Producer: {objectData.producer}</div>
                  <div>Opening crawl: {objectData.opening_crawl}</div>
                </> : (type === "species") ? 
                <>           
                  <div>Classification: {objectData.classification}</div>
                  <div>Designation: {objectData.designation}</div>
                  <div>Language: {objectData.language}</div>
                  <div>Avg. Lifespan: {objectData.average_lifespan} years</div>
                  <div>Avg. Height: {objectData.average_height} cm</div>
                  <div>Skin color(s): {objectData.skin_colors}</div>
                  <div>Hair color(s): {objectData.hair_colors}</div>
                  <div>Eye color(s): {objectData.eye_colors}</div>
                  {(objectData.homeworld === null) ? "" : <div>Homeworld: <ObjectLink url={objectData.homeworld} type="planets"></ObjectLink></div> }
                </> : (type === "starships") ? 
                <>           
                  <div>Model: {objectData.model}</div>
                  <div>Manufacturer: {objectData.manufacturer}</div>
                  <div>Class: {objectData.starship_class}</div>
                  <div>Cost: {numberWithCommas(objectData.cost_in_credits)} credits</div>
                  <div>Max. Speed: {numberWithCommas(objectData.max_atmosphering_speed)} Km/h</div>
                  <div>Hyperdrive Rating: {objectData.hyperdrive_rating}</div>
                  <div>MGLT: {objectData.MGLT}</div>
                  <div>Length: {numberWithCommas(objectData.length)} m</div>
                  <div>Passengers: {numberWithCommas(objectData.passengers)}</div>
                  <div>Cargo Capacity: {numberWithCommas(objectData.cargo_capacity/1000)} metric tons</div>
                </> : (type === "vehicles") ? 
                <>           
                  <div>Model: {objectData.model}</div>
                  <div>Manufacturer: {objectData.manufacturer}</div>
                  <div>Class: {objectData.starship_class}</div>
                  <div>Cost: {numberWithCommas(objectData.cost_in_credits)} credits</div>
                  <div>Max. Speed: {numberWithCommas(objectData.max_atmosphering_speed)} Km/h</div>
                  <div>Length: {numberWithCommas(objectData.length)} m</div>
                  <div>Passengers: {numberWithCommas(objectData.passengers)}</div>
                  <div>Cargo Capacity: {numberWithCommas(objectData.cargo_capacity)} kg</div>
                  <div>Consumables: {objectData.consumables}</div>
                </> : (type === "planets") ? 
                <>           
                  <div>Population: {numberWithCommas(objectData.population)}</div>
                  <div>Rotation Period: {objectData.rotation_period} days</div>
                  <div>Orbital Period: {objectData.orbital_period} days</div>
                  <div>Diameter: {numberWithCommas(objectData.diameter)} Km</div>
                  <div>Gravity: {numberWithCommas(objectData.gravity)}</div>
                  <div>Terrain: {objectData.terrain}</div>
                  <div>Surface Water: {numberWithCommas(objectData.surface_water)}%</div>
                  <div>Climate: {objectData.climate}</div>
                </> : ""
              }                        
            </div>
          </div>
          <div className='extra-info-container'>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default ObjectDetails