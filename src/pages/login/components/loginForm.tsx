import React from 'react';
import { Button, TextField, Divider, Checkbox } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
const LoginForm=()=>{
    return(
        <div>
            <div className='icon'>
                <div className='icon_class'>
                    <PersonIcon fontSize="large"/>
                </div>
                <div className='text'>Sign In</div>
            </div>
            <div className='row m-2'>
                <TextField id="email" className="p-2" type="text" variant="outlined" label="Enter Email"/>
                <TextField id="password" className="p-2" type="password" variant="outlined" label="Enter Password"/>
                <FormControlLabel
                    control={
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name='checked'
                        />
                    }
                    label="Remember me"
                />
                <Button variant='contained' color="primary">Login</Button>
            </div>
            <Divider variant="middle"/>
            <p className='text-center'>
                <Link to="/sign-up" className="text-black-50">
                    <h5>Register?</h5>
                </Link>
            </p>
        </div>
    )
}
export default LoginForm;