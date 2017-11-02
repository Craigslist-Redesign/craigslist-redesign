import React, { Component } from 'react';

class HousingTagsList extends Component {

  render() {
    return (
      <div className="tag-list-container">
        <ul>
          <li onClick={ this.props.handleTagState }>Apts & Housing</li>
          <li onClick={ this.props.handleTagState }>Housing Wanted</li>
          <li onClick={ this.props.handleTagState }>Office & Commerical</li>
          <li onClick={ this.props.handleTagState }>Real Estate For Sale</li>
          <li onClick={ this.props.handleTagState }>Rooms & Shared</li>
          <li onClick={ this.props.handleTagState }>Rooms Wanted</li>
          <li onClick={ this.props.handleTagState }>Sublets & Temporary</li>
          <li onClick={ this.props.handleTagState }>Vacation Rentals</li>
        </ul>
      </div>
    )
  }
}

export default HousingTagsList;
