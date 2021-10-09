import React from "react";
import Navbar from "../utils/navbar";

const sresult = ()=>
{
    return(
        <div>
            <Navbar/>
            <hr/>
            <div class="container">
                <table class="table table-dark table-striped">
                    <thead> 
                        <tr>
                            <th>USN</th>
                            <th>DATA STRUCTURE</th>
                            <th>C PROGRAMMING</th>
                            <th>COMPUTER NETWORKS</th>
                            <th>OPERATING SYSTEMS</th>
                            <th>RESULT</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>4SN18CS038</td>
                            <td>90</td>
                            <td>100</td>
                            <td>89</td>
                            <td>88</td>
                            <td>PASS</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default sresult;