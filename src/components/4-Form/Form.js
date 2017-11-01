import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {

    console.log(event);
    const formObject = this.state;
    console.log(formObject);


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
              <div className='top-right-image-box'></div>
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