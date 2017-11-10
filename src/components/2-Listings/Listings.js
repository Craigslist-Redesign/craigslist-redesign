import React, { Component } from 'react';
import firebase from '../../firebase.js'
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import LoginModal from '../Navbar/LoginModal/LoginModal';
import Fav from './Fav/Fav';
import './Listings.css';
import { connect } from 'react-redux';

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
      tagsArray: [],
      list: false,
      loginModal: false,
      redirect: ''
    }
    this.handleDateSort = this.handleDateSort.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount(){
    console.log(this.props.userId);
    // if(this.props.userId){
      this.getListings(this.props.userId);
    // }


    // firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     this.setState({ user: user.email })
    //     this.setState({ uid: user.uid })
    //   }
    // })

    this.setState({ tag: this.props.match.params.tag})
    axios.get('/api/getCategories').then(res => {
      this.setState({ categoriesArray: res.data })
    })

    const category = this.props.match.params.category;
    axios.post('/api/getCategoryTags', [category]).then(res => {
      this.setState({ tagsArray: res.data })
    })

    window.addEventListener('scroll', this.handleScroll);
  }

  getListings(id){
    const catObject = this.props.match.params;
    catObject.value = this.state.value
    catObject.uid = id

    this.setState({ category: catObject.category })
    axios.post('/api/getListings/', catObject).then(res => {
      this.setState({ listArray: res.data, list: true, redirect: 'listings' })
      console.log(this.state.listArray);
    })
  }

  // componentWillReceiveProps(nextProps){
  //   this.getListings(nextProps.userId);
  // }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if(window.scrollY > 120) {
      // document.getElementById('searchbar-container').classList.add('sticky-icky')
      document.getElementById('searchbar-container').style.marginBottom = '1em';
    } else if(window.scrollY < 120) {
      // document.getElementById('searchbar-container').classList.remove('sticky-icky')
      document.getElementById('searchbar-container').style.marginBottom = '4.5em';
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
      <option value={item.tag} selected={selected} key={index}>{ item.tag }</option>
    )
  }

  renderListItem(item, index) {
    const backgroundStyle = {
      backgroundImage: `url(${item.image_url})`
    }
    return (
      <div className="list-item-container" key={index}>
        <Link to={`/post/${item.post_id}`}>
        <div className="list-item-parent-image">
          <div className="list-item-image-container" style={ backgroundStyle }></div>
          { item.price != 0 && <p className="list-item-price">${ item.price }</p> }
        </div>
        </Link>
        <div className="list-item-title-container">
          <Link to={`/post/${item.post_id}`}><h3>{ item.title }</h3></Link>
          <Fav item={item} login={this.showLoginModal.bind(this)} onFav={this.handleFavPost.bind(this)}/>
        </div>
      </div>
    )
  }

  showLoginModal = () => {
    this.setState({ loginModal: true })
  }

  closeLoginModal = () => {
    this.setState({ loginModal: false });
  }

  handleSearchInput(value) {
    this.setState({ value: value })
    const listingsObject = {
      category: this.props.match.params.category,
      tag: this.state.tag,
      value: value,
      uid: this.props.userId
    }

    axios.post('/api/searchListings', listingsObject).then(res => {
      this.setState({ listArray: res.data.reverse() })
      console.log(this.state.listArray);
    })
  }

  handleFavPost(id, fav){
    const favObject = {
      uid: this.props.userId,
      post_id: id
    }
    if(!this.state.user) {
      this.setState({ modal: true })
    }
    if(fav == false) {
      axios.post('/api/postFav', favObject)
    }
    else {
      axios.post('/api/removeFav', favObject)
    }
  }

  handleCategoryChange(category) {
    const catObject = {
      category: category,
      tag: 'all',
      uid: this.props.userId
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
      tag: tag,
      uid: this.props.userId
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

  handlePriceSort(e) {}

  render(){
    console.log(this.state);
    let priceFilter;
    if(this.state.category === 'For Sale') {
      priceFilter =
        <div id="price-filter" className="input-container">
          <select onChange={ (event) => this.handlePriceSort(event.target.value) }>
            <option value="Lowest">Lowest Price</option>
            <option value="Newest">Highest Price</option>
          </select>
          <img className="down-arrow" src={ require("../../assets/icons/drop-down-arrow.svg") } alt=""/>
        </div>
    }

    let notFound;
    if(this.state.listArray.length === 0 && this.state.list) {
      notFound =
      <h3>Nothing found.</h3>
    }

  return(
    <div className="listings-container">
      <div id="searchbar-filter-container" className="searchbar-filter-container">
        <div id="searchbar-container" className="searchbar-container">
          <div className="searchbar-icon-container">
            <p><i className="icon-heart-empty"></i></p>
            <svg className="searchbar-icon" viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg"><title>Search</title><path d="M18.387 16.623C19.995 15.076 21 12.907 21 10.5 21 5.806 17.195 2 12.5 2 7.806 2 4 5.806 4 10.5S7.806 19 12.5 19c1.927 0 3.7-.65 5.125-1.73l4.4 5.153.76-.65-4.398-5.15zM12.5 18C8.364 18 5 14.636 5 10.5S8.364 3 12.5 3 20 6.364 20 10.5 16.636 18 12.5 18z" fill="currentColor" fillRule="evenodd"></path></svg>
          </div>
          <input className="input" placeholder="Search" onChange={ (event) => { this.handleSearchInput(event.target.value) }}/>
        </div>
        <div className="filter-container">
          <div id="category-filter" className="input-container">
            <select onChange={ (event) => this.handleCategoryChange(event.target.value) }>
              { this.state.categoriesArray.map( (x, i) => this.renderCategoryItem(x, i) ) }
            </select>
            <img className="down-arrow" src={ require("../../assets/icons/drop-down-arrow.svg") } alt=""/>
          </div>
          <div id="tag-filter" className="input-container">
            <select onChange={ (event) => this.handleTagSort(event.target.value) }>
              <option value="all">All</option>
              { this.state.tagsArray.map( (x, i) => this.renderTagItem(x, i)) }
            </select>
            <img className="down-arrow" src={ require("../../assets/icons/drop-down-arrow.svg") } alt=""/>
          </div>
          { priceFilter }
          <div id="newest-oldest-filter" className="input-container">
            <select onChange={ (event) => this.handleDateSort(event.target.value) }>
              <option value="Newest">Newest First</option>
              <option value="Oldest">Oldest First</option>
            </select>
            <img className="down-arrow" src={ require("../../assets/icons/drop-down-arrow.svg") } alt=""/>
          </div>
        </div>
      </div>
      <div id="center" className="content-container">
        { notFound }
        <div className="list-item-parent-container">
          { this.state.listArray.map( (x, i) => this.renderListItem(x, i)) }
        </div>
      </div>
      { this.state.loginModal && <LoginModal state={ this.state } listings={ this.getListings.bind(this) } closeModal={ this.closeLoginModal } /> }
    </div>
    )
  }
}

export default withRouter(connect(state => state)(Listings));
