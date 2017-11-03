import React, { Component } from 'react';

class ForSaleForm extends Component {
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
        <input className="" type="number" required placeholder="Price" onChange={ (event) => { this.props.state.price = event.target.value } } />
        <input className="" type="text" required placeholder="Location" onChange={ (event) => { this.props.state.location = event.target.value } } />
        <input className="" type="text" pattern="(\d{5}([\-]\d{4})?)" required placeholder="Zip Code" onChange={ (event) => { this.props.state.zipcode = event.target.value } } />
        <input className="" type="text" required placeholder="Description" onChange={ (event) => { this.props.state.description = event.target.value } } />
        <input type="file" required onChange={(event) => this.props.state.file = event.target.files[0] }/>
        <br />
        <button type="submit" onClick={
          (event) => {
            if(this.props.state.title && this.props.state.price && this.props.state.location && this.props.state.zipcode && this.props.state.description && this.props.state.file ) {
                this.props.handleSubmit(event, this.props.state)
            }
          }
        }>Submit</button>
        </form>
      </div>
    )
  }
}

export default ForSaleForm;
