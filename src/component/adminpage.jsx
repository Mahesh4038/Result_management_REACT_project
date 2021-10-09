import React from "react";
import Navbar from "../utils/navbar";
import '../index.css' ;
import { Link } from "react-router-dom";

const apage = ()=>
{
    return(
        <div>
            <Navbar/>
            <hr/>
            <div id = "boxes"> 
          
                        <Link to="/addstd">
                            <div id = "leftbox"> 
                                <h3 id="b1">Add student result</h3>
                            </div>  
                        </Link>

                        <Link to="/updates">
                            <div id = "middlebox"> 
                                <h3 id="b2">Update student result</h3> 
                            </div> 
                        </Link>

                        <Link to="/deletes">
                            <div id = "rightbox"> 
                                <h3 id="b3">Delete student</h3>
                            </div> 
                        </Link>
            </div>
        </div>
    );
}
export default apage;