import React, { Component } from 'react';

class ServicesTagsList extends Component {

  render() {
    return (
      <div className="tag-list-container">
        <ul>
          <li onClick={ this.props.handleTagState }>Automotive</li>
          <li onClick={ this.props.handleTagState }>Beauty</li>
          <li onClick={ this.props.handleTagState }>Cell & Mobile</li>
          <li onClick={ this.props.handleTagState }>Computer</li>
          <li onClick={ this.props.handleTagState }>Event</li>
          <li onClick={ this.props.handleTagState }>Household</li>
          <li onClick={ this.props.handleTagState }>Labor & Move</li>
          <li onClick={ this.props.handleTagState }>Lessons</li>
          <li onClick={ this.props.handleTagState }>Pet</li>
          <li onClick={ this.props.handleTagState }>Real Estate</li>
          <li onClick={ this.props.handleTagState }>Skilled Trade</li>
          <li onClick={ this.props.handleTagState }>Writing & Editing</li>
        </ul>
      </div>
    )
  }
}

export default ServicesTagsList;
