import React from 'react';
import { Button, TextField, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
const SignUpForm=()=>{
    return(
        <div>
            <div className='icon'>
                <div className='icon_class'></div>
                <div className='text'>Sign Up</div>
            </div>
            <div className='row m-2'>
                <div className='col-6 p-2'>
                    <TextField id="firstname" type="text" variant="outlined" label="Enter First Name"/>
                </div>
                <div className='col-6 p-2'>
                    <TextField id="lastname" type="text" variant="outlined" label="Enter Last Name"/>
                </div>
            </div>
            <div className='row m-2'>
                <TextField id="email" className="p-2" type="text" variant="outlined" label="Enter Email"/>
                <TextField id="password" className="p-2" type="password" variant="outlined" label="Enter Password"/>
                <Button variant='contained' color="primary">Create Account</Button>
            </div>
            <Divider variant="middle"/>
            <p className='text-center'>
                <Link to="/login" className='text-black-50'>
                    <h5>Already have an account?</h5>
                </Link>
            </p>
        </div>
    )
}
export default SignUpForm;