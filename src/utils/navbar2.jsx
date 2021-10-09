import React from "react";
import '../index.css' ;//my  work

import {BrowserRouter as Router} from 'react-router-dom';//my work
import {Switch ,Route,Link } from 'react-router-dom';//my work

const navbar2= ()=> {
    
    return (
        <div>
            <div>
                <nav>  
                    <ul>
                        
                        <Link className="st" to="/apge">GO TO DASHBOARD</Link>
                  
                        
                   
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default navbar2;