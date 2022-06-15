import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

import { Breadcrumb, ObjectCard, Loading } from '../../components';

import './index.css';

const ObjectList = () => {
  const params = useParams();
  let type = params.type;
  if (type === "characters") type = "people";
  const [objectData, setObjectData] = useState(null);
  const [crumbs, setCrumbs] = useState([params.type]);

  const loadData = async () => {
    const response = await fetch(`https://swapi.dev/api/${type}`);
    const json = await response.json();
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
    return (
      <div className='main-container'>
        <div className='nav-content'>
          <nav className='nav-breadcrumb'>
            <Breadcrumb crumbs={ crumbs } />
          </nav>
        </div>
        <div className='searchResult'>
          <Loading/>
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
          <div className='nav-pagination'>
          { objectData.previous ? (
            <button onClick={prevPage}>Prev Page</button>
          ) : "" }
          { objectData.next ? (
            <button id='nextButton' onClick={nextPage}>Next Page</button>
          ) : "" }
          </div>
        </div>
        <div className='main-content'>
          {objectData.results.map((character) => (
            <ObjectCard key={character.url} {...character} type={params.type}></ObjectCard>
          ))} 
        </div>
      </div>
    </div>
  )
}

export default ObjectList