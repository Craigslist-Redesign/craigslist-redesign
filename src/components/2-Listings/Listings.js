import React, { Component } from 'react';
import firebase from '../../firebase.js'
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoginModal from '../Navbar/LoginModal/LoginModal';
import Fav from './Fav/Fav'
import'./Listings.css'

class Listings extends Component {
  constructor(props){
    super(props);

    this.state = {
      listArray: [],

      uid: '',
      user:'',
      dateSort: true
    }
    this.handleDateSort = this.handleDateSort.bind(this)
  }
  componentWillMount(){
    const catObject = this.props.match.params;

    axios.post('/api/getListings/', catObject).then(res => {
    this.setState({ listArray: res.data })
    this.setState({ reverseListArray: res.data.reverse() })
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user.email })
        this.setState({uid: user.uid})
      }
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

  handleDateSort(e) {
    if(e === 'Oldest') {
      console.log(e);
      this.setState({ dateSort: false })

    }
    else {
      console.log(e);
      this.setState({ dateSort: true })

    }
  }


  render(){
    console.log(this.state.listArray);

    // console.log(this)
    let that = this
    let listItems;
    let reverseListItems;




      listItems = this.state.listArray.map(function(item,index){
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
             <Fav item={item} onFav={that.handleFavPost.bind(that)}/>
          </div>
        )
      })


      //
      // reverseListItems = this.state.reverseListArray.map(function(item,index){
      //   return (
      //     <div className="list-item-container" key={index}>
      //     <Link to={`/post/${item.post_id}`}>
      //       <img className="list-item-image" src={item.image_url} alt='' />
      //       <div className="list-item-title-container">
      //         <h2>
      //           {item.title}
      //         </h2>
      //
      //         </div>
      //       </Link>
      //        <Fav item={item} onFav={that.handleFavPost.bind(that)}/>
      //     </div>
      //   )
      // })




    return(
      <div className="listings-container">
        <div className="content-container">
          <div className="searchbar-container">
            <input placeholder="Search" />
          </div>
          <div className="filter-container">
            <div className="newest-oldest-filter">
              <select onChange={(event) => this.handleDateSort(event.target.value)}>
                <option value="Newest">Newest First</option>
                <option value="Oldest">Oldest First</option>
              </select>
            </div>
          </div>

          <div className="list-item-parent-container">
            { listItems }
          </div>
        </div>
      </div>
    )
  }

}

export default Listings;

// this.props.match.history
