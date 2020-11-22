import React ,{Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Student_Home_Page from './components/js/Student_Home_Page';
// import Teacher_Home_Page from './components/js/Teacher_Home_Page';
import Teacher_Sign_Up from './components/js/Teacher_Sign_Up';

import './components/css/Student_Home_Page/bootstrap.css'; 
import './components/css/Student_Home_Page/style.css';


export class MainComponent extends Component {

    render(){
        return(
            <Student_Home_Page/>
            // <Switch>
            //     {/* <Route exact path='/Teacher_Home_Page' component={() => <Teacher_Home_Page/>} /> */}
            //     <Route exact path='/Student_Home_Page' component={() => <Student_Home_Page/>} />
            //     {/* <Route exact path='/Teacher_SignUp_Page' component={() => <Teacher_Sign_Up/>} /> */}
            //     <Redirect to="/Student_Home_Page" /> 
            // </Switch>
        )
    }
}

export default MainComponent;