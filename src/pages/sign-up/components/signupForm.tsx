import React from 'react';
import styles from "./styles.module.css";
import { Button, TextField, Divider } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
const SignUpForm=()=>{

    const navigate = useNavigate()

    const validateEmail = (email:string) => {
        let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
        return regex.test(email);
      };
      
    const [firstName, setfirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userExists, setUserExists] = useState(false)
    const handleSubmit=()=>{
        const user ={firstName,lastName,email,password};
        fetch('http://localhost:8000/sign-up',{
            method : 'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(user)
        }).then((res) => res.json())
        .then((json) => {
            setUserExists(json)
            console.log(json)
            navigate("/login")
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
                    <TextField id="firstname" style={{margin:5}} type="text" error={firstName.length<1} value={firstName} onChange={(e)=>setfirstname(e.target.value)} variant="outlined" label="Enter First Name"/>
                </div>
                <div className='col-6 p-2'>
                    <TextField id="lastname" style={{margin:5}} type="text" error={lastName
                    .length<1} value={lastName} onChange={(e)=>setLastname(e.target.value)} variant="outlined" label="Enter Last Name"/>
                </div>
            </div>
            <div className={styles["icon"]}>
                <TextField id="email" className="p-2" style={{margin:5}} type="text" value={email} error={userExists||(!validateEmail(email))} onChange={(e)=>{setEmail(e.target.value);setUserExists(false)}} variant="outlined" label="Enter Email"/>
                <TextField id="password" className="p-2" style={{margin:5}} type="password" error={password.length<6} value={password} onChange={(e)=>setPassword(e.target.value)} variant="outlined" label="Enter Password"/>
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
