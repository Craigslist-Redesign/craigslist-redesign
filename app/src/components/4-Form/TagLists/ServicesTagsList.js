import React, { Component } from 'react';

class ServicesTagsList extends Component {

  render() {
    return (
      <div className="tag-list-container">
        <ul>
          <li className="hover" onClick={ this.props.handleTagState }>Automotive</li>
          <li className="hover" onClick={ this.props.handleTagState }>Beauty</li>
          <li className="hover" onClick={ this.props.handleTagState }>Cell & Mobile</li>
          <li className="hover" onClick={ this.props.handleTagState }>Computer</li>
          <li className="hover" onClick={ this.props.handleTagState }>Event</li>
          <li className="hover" onClick={ this.props.handleTagState }>Household</li>
          <li className="hover" onClick={ this.props.handleTagState }>Labor & Move</li>
          <li className="hover" onClick={ this.props.handleTagState }>Lessons</li>
          <li className="hover" onClick={ this.props.handleTagState }>Pet</li>
          <li className="hover" onClick={ this.props.handleTagState }>Real Estate</li>
          <li className="hover" onClick={ this.props.handleTagState }>Skilled Trade</li>
          <li className="hover" onClick={ this.props.handleTagState }>Writing & Editing</li>
        </ul>
      </div>
    )
  }
}

export default ServicesTagsList;
