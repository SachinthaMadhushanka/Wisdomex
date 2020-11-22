import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import Student_Home_Page from './components/js/Student_Home_Page';
import Teacher_Home_Page from './components/js/Teacher_Home_Page';
import Teacher_Sign_Up from './components/js/Teacher_Sign_Up';
import Teacher_Login_Page from './components/js/Teacher_Login_Page';
import Student_Sign_Up from './components/js/Student_Sign_Up';
import Parent_Sign_Up from './components/js/Parent_Sign_Up';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

      <Switch>
          <Route exact path='/Teacher_Login_Page' component={() => <Teacher_Login_Page/>} />
          <Route exact path='/Teacher_Home_Page' component={() => <Teacher_Home_Page/>} />
          <Route exact path='/Student_Home_Page' component={() => <Student_Home_Page/>} />
          <Route exact path='/' component={() => <Teacher_Sign_Up/>} />
          <Route exact path='/Student_SignUp_Page' component={() => <Student_Sign_Up/>} />
          <Route exact path='/Parent_SignUp_Page' component={() => <Parent_Sign_Up/>} />
          <Redirect to="/Teacher_Login_Page" /> 
      </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;