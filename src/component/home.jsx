import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../utils/navbar";
import img from'../image/g1.jpg';
import S_registration from "./S_registration";

const home= ()=> {
    
        return (
            <div style={{backgroundimage:"url(../image/g1.jpg)",backgroundsize:"cover"}}  >
                <Navbar />
                <hr/>
   
                <h1 align="center" style={{color:"red"}}>RESULT DECLARED!!</h1>

                <br/>

                <div align="center">
                <Link to="/sreg"><button><b> CHECK NOW </b> </button></Link>
                </div>
            </div>
        );
    };
    
    export default home;