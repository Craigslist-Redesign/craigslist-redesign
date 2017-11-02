import React, { Component } from 'react';

class CommunityTagsList extends Component {

  render() {
    return (
      <div className="tag-list-container">
        <ul>
          <li onClick={ this.props.handleTagState }>Activities</li>
          <li onClick={ this.props.handleTagState }>Artists</li>
          <li onClick={ this.props.handleTagState }>Childcare</li>
          <li onClick={ this.props.handleTagState }>Classes</li>
          <li onClick={ this.props.handleTagState }>Events</li>
          <li onClick={ this.props.handleTagState }>General</li>
          <li onClick={ this.props.handleTagState }>Groups</li>
          <li onClick={ this.props.handleTagState }>Local News</li>
          <li onClick={ this.props.handleTagState }>Lost & Found</li>
          <li onClick={ this.props.handleTagState }>Musicians</li>
          <li onClick={ this.props.handleTagState }>Pets</li>
          <li onClick={ this.props.handleTagState }>Volunteers</li>
        </ul>
      </div>
    )
  }
}

export default CommunityTagsList;
