
import React from "react";
import Navbar from "../utils/navbar";
import '../index.css' ;
import { Link } from "react-router-dom";
import Sresult from "./sresult";

const slogin= ()=> 
{
    
        return (
            <div>

                <Navbar/>
                <hr/>
                <form action="/sres" >
                    <fieldset>
                        <legend id="reg" >STUDENT LOGIN</legend>
                        <label  id="a" for="AdminID">USN</label><br/>
                        <input type="text" name="AdminID" maxlength="10"  placeholder="Enter your USN" required autocomplete="off"/>
                        <br/> 

                        <label  id="b" for="Name">NAME</label><br/>
                        <input type="text" name="Name" maxlength="10" placeholder="Enter your Name" required autocomplete="off"/>
                        <br/> 
                        <a><button type="submit" name="submit"><b>Submit</b></button></a>
                    
                    </fieldset>
                </form>

            </div>
        );
};
            
export default slogin;