import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

import CharacterCard from '../../components/CharacterCard';
import Loading from '../../components/Loading';


const ObjectDetails = () => {
  const params = useParams();
  const [objectData, setObjectData] = useState(null);

  const loadData = async () => {
    const response = await fetch(`https://swapi.dev/api/${params.type}/${params.id}`);
    const json = await response.json();
    setObjectData(json);
  }

  useEffect(() => {
    loadData();
  }, []);

  if(objectData === null) {
    return (
      <div>
        <Loading/>
      </div>
    );
  }

  return (
    <div>
      <div className='main-container'>
        <div className='objectDetails'>
          <CharacterCard {...objectData}></CharacterCard>
        </div>
      </div>
    </div>
  )
}

export default ObjectDetails