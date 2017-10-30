import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/0-Home/Home.js';
import SubCategory from './components/1-SubCategory/SubCategory.js';
import Postings from './components/2-Postings/Postings.js';
import Post from './components/3-Post/Post.js';



export default (

    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/subcategory' component={SubCategory}/>
      <Route path='/postings' component={Postings}/>
      <Route path='/post' component={Post}/>
    </Switch>

  )
