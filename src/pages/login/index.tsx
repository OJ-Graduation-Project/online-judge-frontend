import React, { useState } from 'react';
import styles from "./styles.module.css";
import { Button, TextField, Divider } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import Cookies from 'universal-cookie';
import {LOGIN_URL} from "../../data/EndPoints"
const cookies = new Cookies();

const Login: React.FC = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookie, setCookie] = useState(null)
    const navigate = useNavigate();
    const handleClick=()=>{
        const user ={email,password};
        fetch(LOGIN_URL,{
            method : 'POST',
            credentials: 'include',
            body:JSON.stringify(user)
        }).then((res) => res.json())
        .then((json) => {
            console.log(json)
            // navigate("/login");
            setCookie(cookies.get("cookie"))
            console.log(cookie)
            navigate("/home")
        })
    }

    return(
        <div>
            
            <div className={styles["Login"]}>
                <div className={styles["icon"]}>
                    <div className={styles["icon_class"]}>
                        <PersonIcon fontSize="large"/>
                    </div>
                    <div className={styles["text"]}>Sign In</div>
                </div>
                <div className={styles["icon"]}>
                    <TextField id="email" style={{margin:5}} type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} variant="outlined" label="Enter Email"/>
                    <TextField id="password" style={{margin:5}} type="password" value={password} onChange={(e)=>setPassword(e.target.value)} variant="outlined" label="Enter Password"/>
                    <div>
                    <Button variant='contained' color="primary" onClick={handleClick}>Login</Button>    
                    <Divider variant="middle"/>
                    <p className='text-center'>
                        <Link to="/sign-up" className="text-black-50">
                            <h5>Register?</h5>
                        </Link>
                    </p>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Login;