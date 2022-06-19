import React from 'react';

import { Link } from 'react-router-dom';

import { FaGithubSquare } from 'react-icons/fa';

import './index.css';

const index = () => {
    return (
        <footer>
            <div className="footer-content">
                <div>
                    <div className="find-me">
                        <span className="follow">FOLLOW ME:</span>
                        <Link to="https://github.com/ebellotpu6">
                            <FaGithubSquare /> GitHub
                        </Link>
                    </div>
                    <div className="copyright">DESIGNED AND DEVELOPED BY <b>EMILI BELLOT</b> ©2022</div>
                    
                </div>
                <div className="disclaimer">Star Wars and all associated names and/or images are copyright Lucasfilm Ltd. Images were freely collected from 
                    <Link to="http://starwars.wikia.com/wiki/Main_Page">Wookiepedia</Link>.
                </div>
            </div>
        </footer>
    )
}

export default index