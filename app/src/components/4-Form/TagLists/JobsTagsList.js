import React, { Component } from 'react';

class JobsTagsList extends Component {

  render() {
    return (
      <div className="tag-list-container">
        <ul>
          <li className="hover" onClick={ this.props.handleTagState }>Accounting & Finance</li>
          <li className="hover" onClick={ this.props.handleTagState }>Admin & Office</li>
          <li className="hover" onClick={ this.props.handleTagState }>Art & Media</li>
          <li className="hover" onClick={ this.props.handleTagState }>Education</li>
          <li className="hover" onClick={ this.props.handleTagState }>Food & Bev</li>
          <li className="hover" onClick={ this.props.handleTagState }>General Labor</li>
          <li className="hover" onClick={ this.props.handleTagState }>Manufacturing</li>
          <li className="hover" onClick={ this.props.handleTagState }>Medical & Health</li>
          <li className="hover" onClick={ this.props.handleTagState }>Real Estate</li>
          <li className="hover" onClick={ this.props.handleTagState }>Retail Wholesale</li>
          <li className="hover" onClick={ this.props.handleTagState }>Sales & Biz Dev</li>
          <li className="hover" onClick={ this.props.handleTagState }>Skilled Trade & Craft</li>
          <li className="hover" onClick={ this.props.handleTagState }>Technical</li>
          <li className="hover" onClick={ this.props.handleTagState }>Transport</li>
          <li className="hover" onClick={ this.props.handleTagState }>Writing & Editing</li>
          <li className="hover" onClick={ this.props.handleTagState }>Part-time</li>
        </ul>
      </div>
    )
  }
}

export default JobsTagsList;
