import React from 'react';
import styles from "./styles.module.css";
import { Button, TextField, Divider } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const SignUpForm=()=>{
 
    const [firstname, setfirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const handleSubmit=()=>{
        const user ={firstname,lastname,email,password};
        fetch('http://localhost:8000/sign-up',{
            method : 'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(user)
        }).then(()=>{
            console.log("done");
        })
    }
 
    return(
        <div>
            <div className={styles["icon"]}>
                <div className={styles["icon_class"]}>
                    <PersonAddIcon fontSize="large"/>
                </div>
                <div className={styles["text"]}>Sign Up</div>
            </div>
            <div className={styles["icon"]}>
                <div className='col-6 p-2'>
                    <TextField id="firstname" style={{margin:5}} type="text" value={firstname} onChange={(e)=>setfirstname(e.target.value)} variant="outlined" label="Enter First Name"/>
                </div>
                <div className='col-6 p-2'>
                    <TextField id="lastname" style={{margin:5}} type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} variant="outlined" label="Enter Last Name"/>
                </div>
            </div>
            <div className={styles["icon"]}>
                <TextField id="email" className="p-2" style={{margin:5}} type="text" value={email} onChange={(e)=>setEmail(e.target.value)} variant="outlined" label="Enter Email"/>
                <TextField id="password" className="p-2" style={{margin:5}} type="password" value={password} onChange={(e)=>setPassword(e.target.value)} variant="outlined" label="Enter Password"/>
                <Button variant='contained' color="primary" onClick={handleSubmit}>Create Account</Button>
            
                <Divider variant="middle"/>
                <p className='text-center'>
                    <Link to="/login" className='text-black-50'>
                        <h5>Already have an account?</h5>
                    </Link>
                </p>
            </div>
 
        </div>
    )
}
export default SignUpForm;
