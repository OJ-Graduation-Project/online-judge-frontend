import React from 'react';
import styles from "./styles.module.css";
import { Button, TextField, Divider } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';
const SignUpForm=()=>{
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
                    <TextField id="firstname" style={{margin:5}} type="text" variant="outlined" label="Enter First Name"/>
                </div>
                <div className='col-6 p-2'>
                    <TextField id="lastname" style={{margin:5}} type="text" variant="outlined" label="Enter Last Name"/>
                </div>
            </div>
            <div className={styles["icon"]}>
                <TextField id="email" className="p-2" style={{margin:5}} type="text" variant="outlined" label="Enter Email"/>
                <TextField id="password" className="p-2" style={{margin:5}} type="password" variant="outlined" label="Enter Password"/>
                <Button variant='contained' color="primary" onClick={(event) => (window.location.href = "/login")}>Create Account</Button>
            
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