import React from "react";

import '../index.css' ;
import { Link } from "react-router-dom";
const adminregistration= ()=> 
{
    
        return (
            <div>
                
                
                <form  to="/admin" >
                    <fieldset>
                        <legend id="reg">REGISTER</legend>
                        <br/>
                        <label for="AdminID"> AdminId </label>
                            <input type="text" name="AdminID" placeholder="Enter UserID" required/>

                        <label for="Name"> NAME </label>            
                            <input type="text" name="Name" placeholder="Enter Name" required />
                        
                        
                        <label for="Password"> PASSWORD </label>    
                        <input type="password" name="Password" id="password" placeholder="Enter Password" />
                        
                        <label for="Password"> CONFIRM PASSWORD </label> 
                        <input type="password" name="ConfirmPassword" id="confirmPassword" placeholder="Re-Enter Password" />

                        
                        <button type="submit" name="submit"><b> SUBMIT </b> </button>
                        <br/>
                        <br/>
                        <Link to="/admin"> Already Have an Account? </Link>
                        <br/>
                    </fieldset>
                </form>


               
            </div>
                
            
                
        );
};
    
export default adminregistration;
