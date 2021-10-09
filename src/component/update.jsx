import React from "react";
import Navbar2 from "../utils/navbar2";
import '../index.css' ;
import { Link } from "react-router-dom";

const upstd = ()=>
{
    return(
        <div>
            <Navbar2/>
            <hr/>
            <form  method="post" action="Admin_page.php" >
                <fieldset>
                    <legend id="reg">UPDATE STUDENT MARKS and RESULT</legend>
                    <br/>
                    <label for="USN"> USN </label> 
                    <input type="text" name="USN" placeholder="Enter USN" required />

                    <label for="DATA STRUCTURE"> DATA STRUCTURE  </label> 			
                    <input type="text" name="DATA STRUCTURE" placeholder="Enter Mark " required />
                    
                    <label for="C PROGRAMMING"> C PROGRAMMING  </label> 			
                    <input type="text" name="C PROGRAMMING" placeholder="Enter Mark" required />
                        
                    <label for="COMPUTER NETWORKS"> COMPUTER NETWORKS  </label> 			
                    <input type="text" name="COMPUTER NETWORKS" placeholder="Enter Mark" required />
                        
                    <label for="OPERATING SYSTEMS"> OPERATING SYSTEMS  </label> 			
                    <input type="text" name="OPERATING SYSTEMS" placeholder="Enter  Mark" required />
                    
                    <label for="RESULT"> RESULT  </label> 			
                    <input type="text" name="RESULT" placeholder="Enter  RESULT" required />

                    <button type="submit" name="submit"><b> UPDATE </b> </button>
                    <br/>
                </fieldset>
	        </form>
        </div>
        );
};
    
export default upstd;