import React, { Component } from 'react';

class ForSaleForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      file: ''
    }

    console.log(this.props.title);
  }

  render() {
    return (
      <div>

        <input className="" type="text" placeholder="Title" onChange={ (event) => { this.props.state.title = event.target.value } } />
        <input className="" type="number" placeholder="Price" onChange={ (event) => { this.props.state.price = event.target.value } } />

        <input type="file" onChange={(event) => this.props.state.file = event.target.files[0] }/>

        <br />
        <button type="submit" onClick={ (event) => this.props.handleSubmit(event, this.props.state) }>Submit</button>
      </div>
    )
  }


}

export default ForSaleForm;


{/* <form >
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
</form> */}
