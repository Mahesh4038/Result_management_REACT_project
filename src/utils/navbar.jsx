import React from "react";
import '../index.css' ;//my  work

import {BrowserRouter as Router} from 'react-router-dom';//my work
import {Switch ,Route,Link } from 'react-router-dom';//my work

const navbar= ()=> {
    
    return (
        <div>
            <div>
                <nav>  
                    <ul>
                        <Link className="st" to="">Home</Link>
                        <Link className="st" to="/about">About</Link>
                        <Link className="st" to="/admin">Admin</Link>
                        
                   
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default navbar;