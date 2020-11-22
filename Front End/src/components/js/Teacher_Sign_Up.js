import { Link } from 'react-router-dom';
import React from 'react';
import {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Teacher_Sign_Up.css';
import  InsertUser from '../../Actions/Register/Teacher';


class Teacher_Sign_Up extends Component {
  constructor(props) {
      super(props);
      this.state = {
        first_name: '',
        mid_name: '',
        last_name: '',
        email: '',
        gender: '',
        teacher_type: '',
        phone_number: '',
        password: '',
        confirm_password: '',
        agreement : '',

        errors : {}
    }   
}


validate = (event) => {
  event.preventDefault();

  let errors =  {
    first_name : '', 
    last_name : '', 
    email : '',
    gender : '',
    teacher_type : '',
    phone_number : '',
    password : '',
    confirm_password : '',
    agreement : ''
  }


  if(this.state.first_name === ""){
    errors.first_name = ' * required'
  }

  if(this.state.last_name === ""){
    errors.last_name = ' * required'
  }

  if(this.state.email === ""){
    errors.email = ' * required'
  }

  if(this.state.gender === ""){
    errors.gender = ' * required'
  }

  if(this.state.teacher_type === ""){
    errors.teacher_type = ' * required'
  }

  if(this.state.phone_number === ""){
    errors.phone_number = ' * required'
  }

  if(this.state.password === ""){
    errors.password = ' * required'
  }

  if(this.state.confirm_password === ""){
    errors.confirm_password = ' * required'
  }
  
  if(this.state.agreement === ""){
    errors.agreement = ' *'
  }


  const regemail = /[^@]+@[^\.]+\..+/;
  const regtel = /^\d+$/;
  const regpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  if(this.state.phone_number && !regtel.test(this.state.phone_number)){
      errors.phone_number = ' * invalid phone number';                                    
  }

  if(this.state.email && !regemail.test(this.state.email)){ 
    errors.email = ' * invalid email address';
  }
  if(this.state.password && this.state.password.length < 8){
    errors.password = '* password should contain at least 8 characters'
  }
  else if(this.state.password && !regpassword.test(this.state.password)){
    errors.password = '* password should contain uppercase, lowecase and numbers'
  }
  else{
    if(this.state.password !== this.state.confirm_password){
      errors.confirm_password = 'passwords does not match'
    }
  }
  this.setState(
    {errors : errors},
    function() {
      this.handleSubmit(event);
    }
    );
  
}

handleSubmit = (event) => {
  // console.log(this.state.errors)
  if(this.isValid(this.state.errors)){
      let is_insert = InsertUser(event, this.state.first_name, this.state.mid_name, this.state.last_name,
      this.state.email, this.state.gender, this.state.phone_number, this.state.teacher_type);
      if(!is_insert){
        this.setState(prevState => ({
            errors: {                   
                ...prevState.errors,    
                email: '* email already exists'     
            }
        })
        )
      }
  }
  
    
}
  

isValid = (errors) => {
  let validity = true;
  console.log(errors)
  Object.keys(errors).forEach(key => {
    if(errors[key] !== ''){
      validity = false;
    }
  });
  return validity;
}

handleChange = (event) => {
  const value = event.target.value;
  this.setState({
    ...this.state,
    [event.target.name]: value
  });
}

  render() { 
    return ( 
      <div className="signup-form">
          <form onSubmit = {this.validate} id = "teacher_reg_form"> 
          <h2>Register</h2>
          <p className="hint-text">Create your teacher account</p>
          <div className="form-group">
              <div className="row">
                  <div className="col">
                      <input type="text" className="form-control" name="first_name" placeholder="First Name" 
                        value={this.state.first_name} onChange={this.handleChange} />
                        <small className="text-danger d-flex justify-content-between d-flex justify-content-between">{this.state.errors.first_name}</small>
                  </div>
              </div>        	
          </div>

          <div className="form-group">
              <div className="row">
                  <div className="col">
                      <input type="text" className="form-control" name="mid_name" placeholder="Middle Name"
                        value={this.state.mid_name} onChange={this.handleChange}/>
                  </div>
              </div>        	
          </div>

          <div className="form-group">
              <div className="row">
                  <div className="col">
                    <input type="text" className="form-control" name="last_name" placeholder="Last Name"
                      value={this.state.last_name} onChange={this.handleChange} />
                      <small className="text-danger d-flex justify-content-between">{this.state.errors.last_name}</small>
                  </div>
              </div>        	
          </div>

          <div className="form-group">
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" name="email" placeholder="Email" 
                      value={this.state.email} onChange={this.handleChange} />
                      <small className="text-danger d-flex justify-content-between">{this.state.errors.email}</small>
                </div>
            </div>
          </div>


          <div className="form-group">
            <div className="row">
                <div className="col-4" style = {{color: "#63738a"}}>
                    Teacher Type
                </div>
                <div className="col-4">
                  <label className="radio-inline">
                      <input type="radio" name="teacher_type" 
                        value = "SCL" onChange={this.handleChange} />
                        School
                  </label>
                </div>
                <div className="col-4">
                  <label className="radio-inline">
                      <input type="radio" name="teacher_type"
                        value="UNI" onChange={this.handleChange} />
                        University
                  </label>
                </div>
            </div>
            <small className="text-danger d-flex justify-content-between">{this.state.errors.teacher_type}</small>
          </div>

          <div className="form-group">
            <div className="row">
                <div className="col-4" style = {{color: "#63738a"}}>
                  Gender
                </div>
                <div className="col-4">
                  <label className="radio-inline">
                      <input type="radio" name="gender" 
                        value="male" onChange={this.handleChange}/>
                        Male
                  </label>
                </div>

                <div className="col-4">

                  <label className="radio-inline">
                      <input type="radio" name="gender"
                        value="female" onChange={this.handleChange} />
                        Female
                  </label>
                </div>
            </div>
            <small className="text-danger d-flex justify-content-between">{this.state.errors.gender}</small>
          </div>

          <div className="form-group">
              <div className="row">
                  <div className="col">
                    <input type="tel" className="form-control" name="phone_number" placeholder="Phone Number"
                      value={this.state.phone_number} onChange={this.handleChange}/>
                      <small className="text-danger d-flex justify-content-between">{this.state.errors.phone_number}</small>
                  </div>
              </div>        	
          </div>

          
          <div className="form-group">
            <div className="row">
                <div className="col">
                <input type="password" className="form-control" name="password" placeholder="Password" 
                  value={this.state.password} onChange={this.handleChange} />
                  <small className="text-danger d-flex justify-content-between">{this.state.errors.password}</small>
                </div>
            </div>
          </div>


          <div className="form-group">
            <div className="row">
                <div className="col">
                    <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" 
                     value={this.state.confirm_password} onChange={this.handleChange}/>
                    <small className="text-danger d-flex justify-content-between">{this.state.errors.confirm_password}</small>
                </div>
            </div>
          </div>


          <div className="form-group">
            <div className="row">
                <div className="col">
                {/* <small className="text-danger d-flex justify-content-between">{this.state.errors.agreement}</small> */}
                  <label className="form-check-label">
                      <small className="text-danger">{this.state.errors.agreement}&ensp;&ensp;</small>
                      <input name = "agreement" type="checkbox" value = "true" onChange={this.handleChange}/> 
                      &ensp; I accept the <a href="">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
                  </label>
                  
                </div>
            </div>
          </div>
          <div className="form-group">
              
          </div>

          <div className="form-group">
          </div>              <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>

      </form>
    <div className="text-center">Already have an account? <Link to='/home'>Sign in</Link></div>
</div>
    );
  }
}
 
export default Teacher_Sign_Up;