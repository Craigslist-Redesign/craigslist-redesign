import React, { Component } from 'react';

class ForSaleTagList extends Component {

  render() {
    return (
      <div className="tag-list-container">
        <ul >
          <li className="hover" onClick={ this.props.handleTagState }>Outdoors</li>
          <li className="hover" onClick={ this.props.handleTagState }>Books</li>
          <li className="hover" onClick={ this.props.handleTagState }>Household</li>
          <li className="hover" onClick={ this.props.handleTagState }>Atv & Motorcycles</li>
          <li className="hover" onClick={ this.props.handleTagState }>Cars & Trucks</li>
          <li className="hover" onClick={ this.props.handleTagState }>Business</li>
          <li className="hover" onClick={ this.props.handleTagState }>Music</li>
          <li className="hover" onClick={ this.props.handleTagState }>Tech</li>
          <li className="hover" onClick={ this.props.handleTagState }>Toys & Games</li>
          <li className="hover" onClick={ this.props.handleTagState }>Garden & Tools</li>
          <li className="hover" onClick={ this.props.handleTagState }>Tickets</li>
          <li className="hover" onClick={ this.props.handleTagState }>Garage Sale</li>
        </ul>
      </div>
    )
  }
}

export default ForSaleTagList;
