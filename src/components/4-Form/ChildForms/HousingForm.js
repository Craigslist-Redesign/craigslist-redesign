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
          <div className="main-parent-forsale-container">
            <div className="title-form-container">
              <input className="input" type="text" required placeholder="Title" onChange={(event) => { this.props.state.title = event.target.value }} />
            </div>

            <div className="center-center">
              <div className="forsale-nontitle-input-container">

                <input className="input forsale-input" type="text" required placeholder="Location" onChange={(event) => { this.props.state.location = event.target.value }} />
                <input className="forsale-middle-input input forsale-input" type="text" pattern="(\d{5}([\-]\d{4})?)" required placeholder="Zip Code" onChange={(event) => { this.props.state.zipcode = event.target.value }} />
                <input className="input forsale-input" type="text" required placeholder="Available Date" onChange={(event) => { this.props.state.availableDate = event.target.value }} />

              </div>
            </div>

            <div className="center-center">
              <div className="forsale-nontitle-2nd">

                <input className="input forsale-input" type="text" required placeholder="Rent" onChange={(event) => { this.props.state.rent = event.target.value }} />
                <input className="forsale-middle-input input forsale-input" type="text" required placeholder="Bedrooms" onChange={(event) => { this.props.state.bedrooms = event.target.value }} />
                <input className="input forsale-input" type="text" required placeholder="Bathrooms" onChange={(event) => { this.props.state.bathrooms = event.target.value }} />

              </div>
            </div>
            <div className="form-description-container">
              <textarea className="form-description-input email-modal-message-input" type="text" required placeholder="Description..." onChange={(event) => { this.props.state.description = event.target.value }} />
            </div>
            <div className="form-image-input">
              <input type="file" required onChange={(event) => this.props.state.file = event.target.files[0]} />
              <br />
            </div>
            <div>
              <button id="form-submit-btn" className="btn" type="submit" onClick={
                (event) => {
                  if (this.props.state.title && this.props.state.location && this.props.state.zipcode && this.props.state.description && this.props.state.employmentType && this.props.state.compensation && this.props.state.companyName && this.props.state.file) {
                    this.props.handleSubmit(event, this.props.state)
                  }
                }
              }>Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default HousingForm;
