import React, {useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignInComponent from './components/login-component/login-component';
import Categories from './components/categories/categories-component.js';
import Category from './components/category/category-component.js';
import AuthComponent from './components/auth-component/auth-component.js';

const App = () => {
  const [userType, setUserType] = useState('');

  return(<div className="app">
          <Switch>
              <Redirect exact from='/' to='/login' />
              <Route
                  
                  path = "/login"
                  render = { (props) => <SignInComponent {...props} setUserType = {setUserType} />}
              /> 
               <Route
                    exact
                    path = "/categories"
                    render = {(props) => <AuthComponent {...props} isLoggedIn = {userType !== ''} ><Categories {...props} userType={userType} /></AuthComponent>}
                >
                </Route>
                <Route
                    
                    path = "/categories/:id"
                    render = {(props) => <AuthComponent {...props} setUserType = {setUserType} isLoggedIn = {userType !== ''} ><Category {...props} /></AuthComponent>}
                /> 
          </Switch>
      </div>);
}

export default App;
