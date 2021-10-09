import React from "react";
import Navbar from "../utils/navbar";
import '../index.css' ;

const Adminlogin= ()=> {
    
        return (
            <div>
                <Navbar/>
                <hr/>
                <form method="GET"  to="/apge" >
                    <fieldset>
                        <legend align='center' >Admin Login</legend>
                        <label  id="a" for="AdminID">ADMIN ID</label>
                        <br/>
                        <input type="text" name="AdminID" maxlength="10"  placeholder="Enter your ID" required autocomplete="off"/>
                        <br/>
                        <label  id="b" for="Name">NAME</label><br/>
                        <input type="text" name="Name" maxlength="10" placeholder="Enter your Name" required autocomplete="off"/>
                        <br/> 
                        <label id="c" for="Password">PASSWORD</label><br/>
                        <input type="password" name="Password" maxlength="10" placeholder="Enter your Password" required autocomplete="off" />
                        <br/> 
                        <button type="submit" name="submit"><b>Submit</b></button>
                        
                        
                    </fieldset>
                </form>
            </div>
                
            
                
        );
    };
    
    export default Adminlogin;

    