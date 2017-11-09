import React, { Component } from 'react';

class CategoryList extends Component {

  render() {
    return (
      <div className="content-container">
        <ul className="category-list">
          <li onClick={ this.props.handleCategoryState }>For Sale</li>
          <li onClick={ this.props.handleCategoryState }>Jobs</li>
          <li onClick={ this.props.handleCategoryState }>Services</li>
          <li onClick={ this.props.handleCategoryState }>Housing</li>
          <li onClick={ this.props.handleCategoryState }>Community</li>
        </ul>
      </div>
    )
  }
}

export default CategoryList;
