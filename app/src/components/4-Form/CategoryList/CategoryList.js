import React, { Component } from 'react';

class CategoryList extends Component {

  render() {
    return (
      <div className="content-container">
        <ul className="category-list">
          <li className="hover" onClick={ this.props.handleCategoryState }>For Sale</li>
          <li className="hover" onClick={ this.props.handleCategoryState }>Jobs</li>
          <li className="hover" onClick={ this.props.handleCategoryState }>Services</li>
          <li className="hover" onClick={ this.props.handleCategoryState }>Housing</li>
          <li className="hover" onClick={ this.props.handleCategoryState }>Community</li>
        </ul>
      </div>
    )
  }
}

export default CategoryList;
