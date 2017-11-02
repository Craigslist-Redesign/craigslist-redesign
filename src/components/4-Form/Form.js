import React, { Component } from 'react';
import axios from 'axios';
import firebase from '../../firebase.js';
import './Form.css';
import CategoryList from './CategoryList/CategoryList'
import ForSaleTagList from './TagLists/ForSaleTagList'
import ForSaleForm from './ChildForms/ForSaleForm'


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      uid: '',
      category: '',
      catId: '',
      title: '',
      price: '',
      description: null,
      location: null,
      zipcode: null,
      condition: null,
      make: null,
      model: null,
      size: null
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ email: user.email })
        this.setState({ uid: user.uid })
      }
    })

    this.handleCategoryState = this.handleCategoryState.bind(this);
    this.handleTagState = this.handleTagState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCategoryState(event) {
    const category = event.target.innerHTML

    switch(true) {
      // Change for_sale everywhere to For Sale
      case category === 'For Sale':
        this.setState({ catId: 1})
        break;
      case category === 'Jobs':
        this.setState({ catId: 2})
        break;
      case category === 'Services':
        this.setState({ catId: 3})
        break;
      case category === 'Housing':
        this.setState({ catId: 4})
        break;
      case category === 'Community':
        this.setState({ catId: 5})
        break;

        default: this.setState({ catId: "" })

    }
    this.setState({ category: category })
    console.log(this.state.category);
  }

  handleTagState(event) {
    let tag = event.target.innerHTML

    if(tag.includes('&amp;')) {
      tag = tag.replace(/amp;/g, "");
      this.setState({ tag: tag })
    }
    else { this.setState({ tag: tag }) }
  }

  handleSubmit(event, input) {
    console.log(this.state);
    event.preventDefault();
    const file = input.file
    const storageRef = firebase.storage().ref()
    const uploadTask = storageRef.child('images/' + file.name).put(file);
    return new Promise(function(resolve, reject) {

      uploadTask.on('state_changed', (snapshot) => {
      }, function(error) {}, function() {
        let downloadURL = uploadTask.snapshot.downloadURL;
        resolve({downloadURL});
        console.log(downloadURL);
      });
    })
    .then(({ downloadURL }) => {
      input.imageUrl = downloadURL
      console.log(input);

      axios.post('/api/createForSaleForm', input)
      .then(response => {
        console.log(response);
      })
    })
  }

  render() {
    let form;
    if(this.state.category === 'For Sale'){
      form =
      <div id="for-sale-form">
        <ForSaleTagList handleTagState={ this.handleTagState } />
        <ForSaleForm state={this.state} handleSubmit={ this.handleSubmit }/>
      </div>
    }

    if(this.state.category === 'Jobs') {
      form = <div><h3>Jobs</h3></div>
    }

    return (
      <div className="form-parent-component">
        <CategoryList handleCategoryState={ this.handleCategoryState} />
        { form }
      </div>
    );
  }
}

export default Form;
