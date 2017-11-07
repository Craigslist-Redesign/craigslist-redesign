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
      uid: '',
      user:'',
      categoriesArray: [],
      tagsArray: []
    }
    this.handleDateSort = this.handleDateSort.bind(this)
  }
  componentWillMount(){
    const catObject = this.props.match.params;
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


  handleFavPost(favs){
    console.log(favs)
    let uid = this.state.uid
    if(!this.state.user) {
      this.setState({ modal: true })
    }
    else {
      axios.post('/api/postFav',[uid,favs.post_id])
    }
  }

  handleCategoryChange(category) {
    console.log(category);
    const catObject = {
      category: category,
      tag: 'all'
    }
    console.log(catObject);
    this.setState({ category: category })

    this.props.history.push(`/listings/${category}/all`);

    axios.post('/api/getListings/', catObject).then(res => {
      this.setState({ listArray: res.data })
      axios.post('/api/getCategoryTags', [category]).then(res => {
        console.log(res);
        this.setState({ tagsArray: res.data })
        console.log(this.state);
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
    axios.post('/api/getListings/', catObject).then(res => {
      this.setState({ listArray: res.data })
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


  render(){
    return(
      <div className="listings-container">
        <div className="content-container">
          <div className="searchbar-container">
            <input placeholder="Search" />
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
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Listings);
