import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/0-Home/Home.js';
import Postings from './components/1-Postings/Postings.js';
import Post from './components/2-Post/Post.js';


export default (

    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/postings' component={Postings}/>
      <Route path='/post' component={Post}/>
    </Switch>

  )
