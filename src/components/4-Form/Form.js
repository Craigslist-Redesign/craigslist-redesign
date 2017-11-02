import React, { Component } from 'react';
import axios from 'axios';
import firebase from '../../firebase.js';
import './Form.css';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catId: ''
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ email: user.email })
        this.setState({ uid: user.uid })
      }
    })
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
    console.log(this.state.catId);
  }

  handleTagState(event) {
    let tag = event.target.innerHTML

    if(tag.includes('&amp;')) {
      tag = tag.replace(/amp;/g, "");
      this.setState({ tag: tag })
    }
    else {
      this.setState({ tag: tag })
    }

    console.log(this.state.tag);
  }

  handleSubmit(event) {
    console.log(this.state);
    // Firebase image upload
    event.preventDefault();
    const file = this.state.file
    const storageRef = firebase.storage().ref()
    const uploadTask = storageRef.child('images/' + file.name).put(file);
    return new Promise(function(resolve, reject) {

      uploadTask.on('state_changed', (snapshot) => {
      }, function(error) {}, function() {
        let downloadURL = uploadTask.snapshot.downloadURL;
        resolve({downloadURL});

      });
    })
    .then(({ downloadURL }) => {
      this.setState({ imageUrl: downloadURL })
      console.log(this.state);
      // post request - createForSaleForm
      const formObject = this.state;
      axios.post('/api/createForSaleForm', formObject)
      .then(response => {
        console.log(response);
      })
    })
  }

  render() {
    let form;
    if(this.state.category === 'For Sale'){

      form =

      <div>

        <div className="tag-list-container">
          <ul>
            <li onClick={ (event) => this.handleTagState(event) }>Outdoors</li>
            <li onClick={ (event) => this.handleTagState(event) }>Books</li>
            <li onClick={ (event) => this.handleTagState(event) }>Household</li>
            <li onClick={ (event) => this.handleTagState(event) }>Atv/Motorcycles/Bikes</li>
            <li onClick={ (event) => this.handleTagState(event) }>Cars & Trucks</li>
            <li onClick={ (event) => this.handleTagState(event) }>Business</li>
            <li onClick={ (event) => this.handleTagState(event) }>Music</li>
            <li onClick={ (event) => this.handleTagState(event) }>Tech</li>
            <li onClick={ (event) => this.handleTagState(event) }>Toys & Games</li>
            <li onClick={ (event) => this.handleTagState(event) }>Garden & Tools</li>
            <li onClick={ (event) => this.handleTagState(event) }>Tickets</li>
            <li onClick={ (event) => this.handleTagState(event) }>Garage Sale</li>
          </ul>
        </div>
        <form >
          <div className='top-input-image-box'>
            <div className='top-left-input-column'>
              <div className="title-form-box">
                <div className='input-type'>
                  Title
                </div>
                  <input className="" type="text" onChange={(event) => this.setState({ title: event.target.value })} />
              </div>
              <div>
                <div className='input-type'>
                  Price
                </div>
                <input type="text" onChange={(event) => this.setState({ price: event.target.value })} />
              </div>

              <div>
               <div className='input-type'>
                  Location
               </div>
              <input type="text" onChange={(event) => this.setState({ location: event.target.value })} />
              </div>
              <div>
                <div className='input-type'>
                  Zip Code
                </div>
                <input type="text" onChange={(event) => this.setState({ zipcode: event.target.value })} />
              </div>
            </div>

          </div>
          <div>
            <label>
            <textarea className='description' placeholder='Description...' type="text" onChange={(event) => this.setState({ description: event.target.value })} />
            </label>
          </div>

          <label>
            Condition:
          <input type="text" onChange={(event) => this.setState({ condition: event.target.value })} />
          </label>
          <br />
          <br />
          <label>
            Make:
          <input type="text" onChange={(event) => this.setState({ make: event.target.value })} />
          </label>
          <br />
          <label>
            Model:
          <input type="text" onChange={(event) => this.setState({ model: event.target.value })} />
          </label>
          <br />
          <label>
            Size:
          <input type="text" onChange={(event) => this.setState({ size: event.target.value })} />
          </label>
          <div className='top-right-image-box'>
            <input type="file" onChange={(event) => this.setState({ file: event.target.files[0] })}/>
          </div>
          <br />
          <button type="submit" onClick={ (event) => this.handleSubmit(event) }>Submit</button>
        </form>
      </div>



    }

    if(this.state.category === 'Jobs') {
      form = <div><h3>Jobs</h3></div>
    }



    return (
      <div className="form-parent-component">

        <div className="category-list-container">
          <ul>
            <li onClick={ (event) => this.handleCategoryState(event) }>For Sale</li>
            <li onClick={ (event) => this.handleCategoryState(event) }>Jobs</li>
            <li onClick={ (event) => this.handleCategoryState(event) }>Services</li>
            <li onClick={ (event) => this.handleCategoryState(event) }>Housing</li>
            <li onClick={ (event) => this.handleCategoryState(event) }>Community</li>
          </ul>
        </div>
        { form }
    </div>
    );
  }
}

export default Form;
