
import Axios from 'axios';

const insertUser = (event,Email, Password) => {
    event.persist();
    Axios.post('http://localhost/Wisdomax/Back End/Login/login-teacher.php',
        {
            Email:Email,
            Password:Password
        },
        {headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }}
    )
    .then((response) => {
        console.log(response);
        if(response.data === "already exists"){
            return false;
        }
        else{
            // window.location.reload(false);
            return true;
        }
        
    }, (error) => {
        console.log(error);
        return false;
    });    
}

export default insertUser
