import React from 'react';
import './header-component.css';

const spanStyle = {
    color:'white',
    fontSize:'20px'

}

const HeaderComponent = ({username,type}) => {
    
return(

        <div className="header">
            <div className="login-style">Logged In as: <span style={spanStyle}>{username.toUpperCase()}</span></div>
            <div className="role-style">Role : <span style={spanStyle}>{type.toUpperCase()}</span></div>
        </div>
    )
}

export default HeaderComponent;