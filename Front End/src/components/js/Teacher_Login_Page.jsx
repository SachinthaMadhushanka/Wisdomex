import React from 'react';
import  { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import insertUser from '../../Actions/Login/Actions';
import '../css/Login.css';
import { Link } from 'react-router-dom';

export default class Teacher_Login_Page extends Component {
    
    constructor(props){
        super(props);
        this.state={
            Email:'',
            Password:'',
            errors:''
        };
    }

    
    myChangeHandler=(event)=>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
  
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        let err='';
        if(!this.state.Email || !this.state.Password){
            err =<strong>Please Enter Email/Password</strong>
        }
        else{
            insertUser(event,this.state.Email,this.state.Password);
        }
        this.setState({errors:err})
      }
    
    
    
    
    
    
    render() {
        return (
            <div className = "signup-form">
                    <form id="form_login" onSubmit={this.mySubmitHandler}>
                        <h2>Log in</h2>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" name="Email" onChange={this.myChangeHandler}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" name="Password" onChange={this.myChangeHandler}/>
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button className="btn btn-success btn-lg btn-block" type="submit" className="btn btn-dark btn-lg btn-block" >Log in</button>
                        <p className="new-user_sign_up">
                            New User? <Link to='Teacher_SignUp_Page'>Sign Up</Link>
                        </p>
                        {this.state.errors}
                    </form>
            </div>
            
        );
    }
}