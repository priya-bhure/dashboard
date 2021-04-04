import React, {Fragment} from 'react';
import {Redirect} from 'react-router-dom';

const AuthComponent = (props) => {
    const isLoggedIn =  props.isLoggedIn || (sessionStorage.getItem('username') && sessionStorage.getItem('username') !== '')

    return(
        <Fragment>
            {
                isLoggedIn ? props.children : <Redirect to='/login' />
            }
        </Fragment>
    )
}

export default AuthComponent;