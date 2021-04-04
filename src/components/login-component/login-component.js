import React, {useState} from 'react';
import CustomInput from '../custom-input/custom-input-component';
import CustomButton from '../custom-button/custom-button';
import './login-component.css';

const SignInComponent = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authErr, setAuthErr] = useState({error: '', exists: false});
    

    const onClick = () => {
        if (username && password) {
            if (username.toLowerCase() === 'john doe' && password === 'john doe') {
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('type', 'admin');
                props.setUserType('admin');
                props.setUsername(username);
                props.isLoggedIn(true);
                props.history.push('/categories');
            } else if (username.toLowerCase() === 'foo' && password === 'foo') {
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('type', 'user');
                props.setUserType('user');
                props.setUsername(username);
                props.isLoggedIn(true);
                props.history.push('/categories');
            } else {
                setAuthErr({exists: true, error: 'Invalid username and password'})
            }
        } else if (username && !password) {
            setAuthErr({exists: true, error: 'Please provide a password'});
        } else if (!username && password) {
            setAuthErr({exists: true, error: 'Please provide a username'});
        } else {
            setAuthErr({exists: true, error: 'Please provide username and password'});
        }
    }

    
    return (
        <div className="signin-container">
            <div className="input">
                <CustomInput
                    type = 'username'
                    placeholder = 'Username*'
                    autoSelect = {true}
                    saveInput = {setUsername}
                    setAuthErr = {setAuthErr}
                />
                <CustomInput
                    type = 'password'
                    placeholder = 'Password*'
                    saveInput = {setPassword}
                    setAuthErr = {setAuthErr}
                />
            </div>
            {authErr.exists ? (<div style={{color: 'red'}}> {authErr.error}</div>): null}
            <CustomButton
                onClick = {onClick}
                value = 'Sign In'
            />
        </div>
    )
}

export default SignInComponent;