import React from 'react';
import styles from "./styles.module.css";
import { Button, TextField, Divider, Checkbox } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
const LoginForm=()=>{
    return(
        <div>
            <div className={styles["icon"]}>
                <div className={styles["icon_class"]}>
                    <PersonIcon fontSize="large"/>
                </div>
                <div className={styles["text"]}>Sign In</div>
            </div>
            <div className={styles["icon"]}>
                <TextField id="email" style={{margin:5}} type="text" variant="outlined" label="Enter Email"/>
                <TextField id="password" style={{margin:5}} type="password" variant="outlined" label="Enter Password"/>
                <div>
                <Button variant='contained' color="primary" onClick={(event) => (window.location.href = "/home")}>Login</Button>    
                <Divider variant="middle"/>
                <p className='text-center'>
                    <Link to="/sign-up" className="text-black-50">
                        <h5>Register?</h5>
                    </Link>
                </p>
                </div>
            </div>
        </div>
    )
}
export default LoginForm;