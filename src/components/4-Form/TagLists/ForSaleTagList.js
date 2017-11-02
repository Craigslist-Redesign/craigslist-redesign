import React, { Component } from 'react';

class ForSaleTagList extends Component {

  render() {
    return (
      <div className="tag-list-container">
        <ul>
          <li onClick={ this.props.handleTagState }>Outdoors</li>
          <li onClick={ this.props.handleTagState }>Books</li>
          <li onClick={ this.props.handleTagState }>Household</li>
          <li onClick={ this.props.handleTagState }>Atv/Motorcycles/Bikes</li>
          <li onClick={ this.props.handleTagState }>Cars & Trucks</li>
          <li onClick={ this.props.handleTagState }>Business</li>
          <li onClick={ this.props.handleTagState }>Music</li>
          <li onClick={ this.props.handleTagState }>Tech</li>
          <li onClick={ this.props.handleTagState }>Toys & Games</li>
          <li onClick={ this.props.handleTagState }>Garden & Tools</li>
          <li onClick={ this.props.handleTagState }>Tickets</li>
          <li onClick={ this.props.handleTagState }>Garage Sale</li>
        </ul>
      </div>
    )
  }
}

export default ForSaleTagList;
