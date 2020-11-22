import React from 'react';
import Axios from 'axios';

const insertUser = (event,first_name, mid_name, last_name, email, gender, phone_number, teacher_type) => {
    event.persist();
    Axios.post('http://localhost/Wisdomax/Back End/Register/add-teacher.php',
        {
            first_name:first_name,
            mid_name:mid_name,
            last_name:last_name,
            email:email,
            gender:gender,
            phone_number:phone_number,
            teacher_type:teacher_type
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
