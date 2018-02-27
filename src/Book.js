import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

 class Book extends Component {

 	handleClick = () => {
      this.props.onBookSelected(this.props.title);
 	}

	render(){
		return (
			<div onClick={this.handleClick} className="col-md-6 answer">
             <h4>{this.props.title}</h4>
            </div>
			)

		
	}
}

Book.propTypes = {
  title: PropTypes.string.isRequired
};

export default Book;
