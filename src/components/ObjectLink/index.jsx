import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const index = ({ url, type }) => {
    const [objectData, setObjectData] = useState(null);
    let id = 1;
    if(url !== undefined) id = url.replace(`https://swapi.dev/api/${type}/`,'').replace('/','');

    const loadData = async () => {
        const response = await fetch(url);
        const json = await response.json();
        setObjectData(json);
    }

    useEffect(() => {
        if(url !== undefined) loadData();
    }, [objectData]);

    if(objectData === null) {
        return (
            <div>...Loading</div>
        );
    }

    return (
        <Link to={`/${type}/${id}`}>{objectData.name}</Link>
    )
}

export default index