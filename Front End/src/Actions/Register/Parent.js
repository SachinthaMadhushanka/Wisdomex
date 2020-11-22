import React from 'react';
import Axios from 'axios';

const insertUser = (event,name, email, phone_number) => {
    event.persist();
    Axios.post('http://localhost/Wisdomax/Back End/Register/add-parent.php',
        {
            name:name,
            email:email,
            phone_number:phone_number,
        },
        {headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }}
    )
    .then((response) => {
        console.log(response);
        if(response.status === 200){
            window.location.reload(false);
            return true;
        }
        else{
            return false;
        }
        
    }, (error) => {
        console.log(error);
        return false;
    });    
}

export default insertUser
