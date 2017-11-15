import React, { Component } from 'react';

class CommunityTagsList extends Component {

  render() {
    return (
      <div className="tag-list-container">
        <ul>
          <li className="hover" onClick={ this.props.handleTagState }>Activities</li>
          <li className="hover" onClick={ this.props.handleTagState }>Artists</li>
          <li className="hover" onClick={ this.props.handleTagState }>Childcare</li>
          <li className="hover" onClick={ this.props.handleTagState }>Classes</li>
          <li className="hover" onClick={ this.props.handleTagState }>Events</li>
          <li className="hover" onClick={ this.props.handleTagState }>General</li>
          <li className="hover" onClick={ this.props.handleTagState }>Groups</li>
          <li className="hover" onClick={ this.props.handleTagState }>Local News</li>
          <li className="hover" onClick={ this.props.handleTagState }>Lost & Found</li>
          <li className="hover" onClick={ this.props.handleTagState }>Musicians</li>
          <li className="hover" onClick={ this.props.handleTagState }>Pets</li>
          <li className="hover" onClick={ this.props.handleTagState }>Volunteers</li>
        </ul>
      </div>
    )
  }
}

export default CommunityTagsList;
