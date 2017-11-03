import React, { Component } from 'react';

class CommunityForm extends Component {
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
        <input className="" type="text" required placeholder="Phone Number" onChange={ (event) => { this.props.state.phoneNumber = event.target.value } } />
        <input className="" type="text" required placeholder="Contact Name" onChange={ (event) => { this.props.state.contactName = event.target.value } } />
        <input type="file" required onChange={(event) => this.props.state.file = event.target.files[0] }/>
        <br />
        <button type="submit" onClick={ (event) => this.props.handleSubmit(event, this.props.state) }>Submit</button>
        </form>
      </div>
    )
  }
}

export default CommunityForm;
