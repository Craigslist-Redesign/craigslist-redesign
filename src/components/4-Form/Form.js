import React, { Component } from 'react';
import axios from 'axios';
import firebase from '../../firebase.js';
import './Form.css';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ email: user.email })
        this.setState({ uid: user.uid })
      }
    })
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }


  uploadImage(event) {
      console.log(this.state);
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
      })



  }

  handleSubmit(event) {
    const formObject = this.state;
    formObject.cat_id = 1;
    formObject.category = 'for_sale'
    axios.post('/api/createForSaleForm', formObject)
    .then(response => {
      console.log(response);
    })
  }

  render() {
    return (
      <div className='for-sale-border-box'>

        <div className='for-sale-main-input-box'>
          <div className='center-center'><div className='main-form-title'>Sell Yo Shit</div></div>
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
              <div className='top-right-image-box'>
                <input type="file" onChange={(event) => this.setState({ file: event.target.files[0] })}/>
                <input type="submit" onClick={ (event) => this.uploadImage(event) }/>
              </div>
            </div>

          <div>
          <label>
            <textarea className='description' placeholder='Description...' type="text" onChange={(event) => this.setState({ description: event.target.value })} />
            </label>
            </div>







            <label>
              Tag:
            <input type="text" onChange={(event) => this.setState({ tag: event.target.value })} />
            </label>


            <br />

            <br />
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
            <br />

          </form>
        </div>
        <button type="submit" onClick={(event) => this.handleSubmit(event)}>Submit</button>

      </div>
    );
  }
}

export default Form;
