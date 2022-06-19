import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import { Breadcrumb, Loading, ObjectInfo, ObjectExtraInfo, ExtraInfo }  from '../../components';

import './index.css';

const ObjectDetails = () => {
  let { id, type } = useParams();
  if(type === "characters") type = "people";
  const url = `https://swapi.dev/api/${type}/${id}/`;
  const [objectData, setObjectData] = useState(null);
  const [crumbs, setCrumbs] = useState([type]);

  const loadData = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setObjectData(json);
    setCrumbs([type, (type === "films") ?  json.title : json.name]);
  }

  useEffect(() => {
    loadData();
  }, [id, type]);

  if(objectData === null || objectData.url !== url) {
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
            <ObjectInfo id={id} type={type} objectData={objectData}></ObjectInfo>
          </div>
          <div className='extra-info-container'>
            <ObjectExtraInfo type={type} objectData={objectData}></ObjectExtraInfo>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ObjectDetails