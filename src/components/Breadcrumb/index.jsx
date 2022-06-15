import React from 'react';
import { Link } from 'react-router-dom';

import './index.css'

const index = (props) => {

    function isLast(index) {
        return index === props.crumbs.length - 1;
    }
    return (
        <ol className='breadcrumb'>
            <li key={0} className='breadcrumb-item-home'>
                <Link to={`/`}>
                    <div>Home</div>
                </Link>
            </li>
            {
                props.crumbs.map((crumb, index) => {
                    const disabled = isLast(index) ? true : false;
                    return (
                        <li key={index} className='breadcrumb-item'>
                            { 
                                (disabled)
                                ? <div className='disabled'>{[crumb.charAt(0).toUpperCase() + crumb.slice(1)]}</div>
                                : <Link to={`/${crumb}`}>
                                    <div>{[crumb.charAt(0).toUpperCase() + crumb.slice(1)]}</div>
                                </Link>
                            }
                        </li>
                    );
                })
            }
        </ol>
    )
}

export default index