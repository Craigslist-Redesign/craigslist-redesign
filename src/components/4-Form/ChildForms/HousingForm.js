import React, { Component } from 'react';

class HousingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <form>
        <input className="" type="text" required placeholder="Title" onChange={ (event) => { this.props.state.title = event.target.value } } />
        <input className="" type="text" required placeholder="Location" onChange={ (event) => { this.props.state.location = event.target.value } } />
        <input className="" type="text" pattern="(\d{5}([\-]\d{4})?)" required placeholder="Zip Code" onChange={ (event) => { this.props.state.zipcode = event.target.value } } />
        <input className="" type="text" required placeholder="Description" onChange={ (event) => { this.props.state.description = event.target.value } } />
        <input className="" type="text" required placeholder="Rent" onChange={ (event) => { this.props.state.rent = event.target.value } } />
        <input className="" type="text" required placeholder="Bedrooms" onChange={ (event) => { this.props.state.bedrooms = event.target.value } } />
        <input className="" type="text" required placeholder="Bathrooms" onChange={ (event) => { this.props.state.bathrooms = event.target.value } } />
        <input className="" type="text" required placeholder="Available Date" onChange={ (event) => { this.props.state.availableDate = event.target.value } } />
        <input type="file" required onChange={(event) => this.props.state.file = event.target.files[0] }/>
        <br />
        <button type="submit" onClick={ (event) => this.props.handleSubmit(event, this.props.state) }>Submit</button>
        </form>
      </div>
    )
  }
}

export default HousingForm;
