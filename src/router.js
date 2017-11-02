import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/1-Home/Home';
import Listings from './components/2-Listings/Listings';
import Post from './components/3-Post/Post';
import Form from './components/4-Form/Form';
import MyAccount from './components/5-MyAccount/MyAccount';



export default (

    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/listings/:category/:tag' component={Listings}/>
      <Route path='/post' component={Post}/>
      <Route path='/form' component={Form}/>
      <Route path='/myaccount' component={MyAccount}/>
    </Switch>

  )
