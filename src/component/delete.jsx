import React from "react";
import Navbar2 from "../utils/navbar2";
import '../index.css' ;
import { Link } from "react-router-dom";

const delstd = ()=>
{
    return(
        <div>
            <Navbar2/>
            <hr/>
                <form   action="adminpage" >
                    <fieldset>
                        <legend id="reg">DELETE STUDENT</legend>
                        <br/>
                        <label for="USN"> USN </label> 
                        <input type="text" name="USN" placeholder="Enter USN" required />

                        <button type="submit" name="submit"><b> DELETE </b> </button>
                        <br/>
                    </fieldset>
                </form>
        </div>
        );
};
    
export default delstd;