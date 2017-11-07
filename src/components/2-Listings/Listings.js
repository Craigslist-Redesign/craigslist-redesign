import React, { Component } from 'react';
import firebase from '../../firebase.js'
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import LoginModal from '../Navbar/LoginModal/LoginModal';
import Fav from './Fav/Fav'
import'./Listings.css'

class Listings extends Component {
  constructor(props){
    super(props);

    this.state = {
      listArray: [],
      category: '',
      tag: '',
      value: '',
      uid: '',
      user:'',
      categoriesArray: [],
      tagsArray: []
    }
    this.handleDateSort = this.handleDateSort.bind(this)
  }
  componentWillMount(){
    this.setState({ category: this.props.match.category, tag: this.props.match.params.tag})

    const catObject = this.props.match.params;
    catObject.value = this.state.value
    this.setState({ category: catObject.category })

    axios.post('/api/getListings/', catObject).then(res => {
      this.setState({ listArray: res.data })
    })

    axios.get('/api/getCategories').then(res => {
      this.setState({ categoriesArray: res.data })
    })


    const category = this.props.match.params.category;
    axios.post('/api/getCategoryTags', [category]).then(res => {
      this.setState({ tagsArray: res.data })
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user.email })
        this.setState({uid: user.uid})
      }
    })
  }


  renderCategoryItem(item, index) {
    const category = this.props.match.params.category;
    let selected = false;
    if(item.name === category) {
      selected = true;
    }
    return (
      <option value={ item.name } selected={selected} key={ index }>{ item.name }</option>
    )
  }

  renderTagItem(item, index) {
    const tag = this.props.match.params.tag;
    let selected = false;
    if(item.tag === tag) {
      selected = true;
    }
    return (
      <option value={ item.tag } selected={selected} key={ index }>{ item.tag }</option>
    )
  }

  renderListItem(item, index) {
    return (
      <div className="list-item-container" key={index}>
        <Link to={`/post/${item.post_id}`}>
        <img className="list-item-image" src={item.image_url} alt='' />
        <div className="list-item-title-container">
          <h2>
            {item.title}
          </h2>
        </div>
      </Link>
      <Fav item={item} onFav={this.handleFavPost.bind(this)}/>
    </div>
    )
  }

  handleSearchInput(value) {
    this.setState({ value: value })
    const listingsObject = {
      category: this.state.category,
      tag: this.state.tag,
      value: value
    }
    console.log(listingsObject);
    axios.post('/api/searchListings', listingsObject).then(res => {
      this.setState({ listArray: res.data })
    })
  }

  handleFavPost(favs){
    let uid = this.state.uid
    if(!this.state.user) {
      this.setState({ modal: true })
    }
    else {
      axios.post('/api/postFav',[uid,favs.post_id])
    }
  }

  handleCategoryChange(category) {
    const catObject = {
      category: category,
      tag: 'all'
    }
    this.setState({ category: category, tag: 'all' })

    this.props.history.push(`/listings/${category}/all`);

    catObject.value = this.state.value
    axios.post('/api/getListings/', catObject).then(res => {
      this.setState({ listArray: res.data })
      console.log(this.state);
      axios.post('/api/getCategoryTags', [category]).then(res => {
        this.setState({ tagsArray: res.data })
      })
    })
  }

  handleTagSort(tag) {
    const category = this.state.category
    const catObject = {
      category: category,
      tag: tag
    }

    this.props.history.push(`/listings/${category}/${tag}`);

    this.setState({ tag: tag })
    catObject.value = this.state.value
    axios.post('/api/getListings/', catObject).then(res => {
      this.setState({ listArray: res.data })
      console.log(this.state);
    })
  }

  handleDateSort(e) {
    const reverseArr = this.state.listArray.reverse().slice();

    if(e === 'Oldest') {
      this.setState({
        listArray: reverseArr
      })
    }
    else {
      this.setState({})
    }
  }


  render(){
    return(
      <div className="listings-container">
        <div className="content-container">
          <div className="searchbar-container">
            <svg class="searchbar-icon" viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg"><title>Search</title><path d="M18.387 16.623C19.995 15.076 21 12.907 21 10.5 21 5.806 17.195 2 12.5 2 7.806 2 4 5.806 4 10.5S7.806 19 12.5 19c1.927 0 3.7-.65 5.125-1.73l4.4 5.153.76-.65-4.398-5.15zM12.5 18C8.364 18 5 14.636 5 10.5S8.364 3 12.5 3 20 6.364 20 10.5 16.636 18 12.5 18z" fill="currentColor" fill-rule="evenodd"></path></svg>
            <input className="input" placeholder="Search" onChange={ (event) => { this.handleSearchInput(event.target.value) }}/>
          </div>
          <div className="filter-container">
            <div className="category-filter">
              <select onChange={ (event) => this.handleCategoryChange(event.target.value) }>
                { this.state.categoriesArray.map( (x, i) => this.renderCategoryItem(x, i) ) }
              </select>
            </div>
            <div className="tag-filter">
              <select onChange={ (event) => this.handleTagSort(event.target.value) }>
                <option value="all">All</option>
                { this.state.tagsArray.map( (x, i) => this.renderTagItem(x, i)) }
              </select>
            </div>
            <div className="newest-oldest-filter">
              <select onChange={ (event) => this.handleDateSort(event.target.value) }>
                <option value="Newest">Newest First</option>
                <option value="Oldest">Oldest First</option>
              </select>
            </div>
          </div>
          <div className="list-item-parent-container">
            { this.state.listArray.map( (x, i) => this.renderListItem(x, i)) }
            { this.state.listArray.length === 0 && <h3>Nothing found.</h3> }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Listings);
