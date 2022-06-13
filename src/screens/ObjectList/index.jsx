import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

import { Breadcrumb, CharacterCard, Loading } from '../../components';

import './index.css';

const ObjectList = () => {
  const params = useParams();
  let type = params.type;
  if (type === "characters") type = "people";
  const [objectData, setObjectData] = useState(null);
  const str = 'flexiple';
  const [crumbs, setCrumbs] = useState([params.type]);

  const selected = crumb => {
    console.log(crumb);
  }

  const loadData = async () => {
    console.log("fetch...");
    const response = await fetch(`https://swapi.dev/api/${type}`);
    console.log("json...");
    const json = await response.json();
    console.log(json);
    setObjectData(json);
  }

  const prevPage = async () => {
    const response = await fetch(objectData.previous);
    const json = await response.json();
    setObjectData(json);
  }

  const nextPage = async () => {
    const response = await fetch(objectData.next);
    const json = await response.json();
    setObjectData(json);
  }

  useEffect(() => {
    loadData();
  }, []);

  if(objectData === null) {
    console.log("loading...");
    return (
      <div>
        <Loading/>
      </div>
    );
  }

  return (
    <div>
      <div className='main-container'>
        <div className='nav-content'>
          <nav className='nav-breadcrumb'>
            <Breadcrumb crumbs={ crumbs } selected={ selected } />
          </nav>
          <div className='nav-pagination'>
          { objectData.previous ? (
            <button onClick={prevPage}>Prev Page</button>
          ) : "" }
          { objectData.next ? (
            <button id='nextButton' onClick={nextPage}>Next Page</button>
          ) : "" }
          </div>
        </div>
        <div className='searchResult'>
          {objectData.results.map((character) => (
            <CharacterCard key={character.url} {...character} type={params.type}></CharacterCard>
          ))} 
        </div>
      </div>
    </div>
  )
}

export default ObjectList