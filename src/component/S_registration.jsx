
import React,{Component} from "react";
import axios from "axios";
import Navbar from "../utils/navbar";
import '../index.css' ;
import { Link } from "react-router-dom";


export default class S_registration extends Component {

    constructor(props){
        super(props);
        this.onChangeUSN=this.onChangeUSN.bind(this);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangeMbl=this.onChangeMbl.bind(this);
        this.onChangeClg=this.onChangeClg.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state =({
            usn:"",
            name:"",
            email:"",
            mbl:"",
            clg:""



        })
    }

        onChangeUSN(e)
        {
            this.setState({usn:e.target.value})
        };

        onChangeName(e)
        {
            this.setState({name:e.target.value})
        };

        onChangeEmail(e)
        {
            this.setState({email:e.target.value})
        };
        onChangeMbl(e)
        {
            this.setState({mbl:e.target.value})
        };

        onChangeClg(e)
        {
            this.setState({clg:e.target.value})
        };

        onSubmit(e){
            e.preventDefault();

            const obj={
                usn:this.state.usn,
                name:this.state.name,
            email:this.state.email,
            mbl:this.state.mbl,
            clg:this.state.clg


            };
            
            axios.post('http://localhost/ebrain_internship_resultmanagement_react/php/S_reg.php' ,obj)
            .then(res => console.log(res.data));
            //console.log(obj)
           
           
           
            this.state =({
                usn:"",
                name:"",
                email:"",
                mbl:"",
                clg:""
    
    
    
            })

        }
     


    render() 
    {
    
        return (
            <div>
                <Navbar/>
                <hr/>
                <form onSubmit={this.onSubmit} action='/slog' >
                    <fieldset>
                        <legend id="reg">STUDENT REGISTRATION</legend>
                        <br/>
                        <label> USN </label> 
                            <input type="text" name="USN" placeholder="Enter USN" required 
                            value={this.state.usn} onChange={this.onChangeUSN}/>

                        <label> NAME </label> 			
                            <input type="text" name="Name" placeholder="Enter Name" required 
                            value={this.state.name} onChange={this.onChangeName}/>
                        
                        <label> EMAIL </label> 			
                        <input type="email" name="Email" placeholder="Enter Email-Id"
                        value={this.state.email} onChange={this.onChangeEmail} />

                        <label> MOBILE NUMBER </label> 
                        <input type="tel" name="Phone" placeholder="Enter valid mobile no." 
                        value={this.state.mbl} onChange={this.onChangeMbl}/>
                        
                        <label> COLLAGE </label> 			
                            <select name="Department" value={this.state.clg} onChange={this.onChangeClg}>
                                <option value="">Select...</option>
                                <option value="Srinivas Mangalore">Srinivas Mangalore</option>
                                <option value="MIT">MIT </option>
                                <option value="sahydri Engineering and Management">sahydri Engineering and Management</option>
                                <option value="Karavali Engineering">Karavali Engineering</option>
                                <option value="SDM Engineering">SDM Engineering</option>
                                <option value="VC Engineering">VC Engineering</option>
                            </select> 
                            

                            
                        <button type="submit" name="submit" onSubmit={this.onSubmit}><b> SUBMIT </b> </button>
                        <br/>
                        <Link to="/slog" > Already Have an Account? </Link>
                        <br/>
                    </fieldset>
                </form>
            </div>
                
            
                
        );
    };
    
}

    