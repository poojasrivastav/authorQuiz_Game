import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './App.css';
// var _ = require('lodash');

import _ from 'lodash';

class Quiz extends Component {
   static initialState = () => (
   	_.extend({
   		bgClass: 'neutral',
   		showContinue: false
   	},data.selectGame())

   )
   	state = Quiz.initialState();
  

   handleBookSelected = (title) =>{
   	var isCorrect = this.state.checkAnswer(title);
   	this.setState({
   		bgClass: isCorrect ? 'pass' : 'fail',
   		showContinue: isCorrect

   	})
   }

   handleContinue = () => {
    this.setState(Quiz.initialState());

   }
	render(){
		return(

       <div className="container">
	       <header><h1>The Author Quiz</h1></header>
		       <div className="jumbotron instru">
		       <h2>Author Quiz</h2>
		       <p>select the book written by the author shown</p>
		       </div>
		       <div className="row">
			       <div className="col-md-4">
			       		<img src={this.state.author.imageUrl} />
			       </div>
			       <div className="col-md-7 list-group">
				       {this.state.books.map(b => {
		                return (
                         <div key={this.state.books.indexOf(b)}>
                         <Book title={b} onBookSelected={this.handleBookSelected}/>
                         </div>
		                )
				       })}
			       </div>
			       <div className={"col-md-1 " + this.state.bgClass}></div>
		       </div>
		       <div>{this.state.showContinue ? 
			       	(<div className="row">
				       	<div className="col-md-12">
				       	{<input onClick={this.handleContinue} type="button" className="btn btn-success button" value="Continue"/>}
				       	</div>
			       	</div>) : <span/>}
		       </div>
       </div>
		)
	}
}

const data = [
  {   id: 1,
    name:'Mark Twain',
    imageUrl: "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTUzNTA5OTAz/mark-twain-9512564-1-402.jpg",
    books: ['The Adventures of Huckleberry Finn']
  },
  { id: 2,
    name: 'Joseph Conrad',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/07/Joseph_Conrad.PNG",
    books: ['Heart of Darkness']
  },
  {   id:  3,
    name: 'J.K. Rowling',
    imageUrl: "https://i2-prod.irishmirror.ie/incoming/article5197657.ece/ALTERNATES/s615/JK-Rowling.jpg",
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {   id: 4,
    name: 'Stephen King',
    imageUrl: "https://vignette.wikia.nocookie.net/stephenking/images/a/a0/Stephen_king-coming-to-boulder.jpg/revision/latest?cb=20170530002714",
    books: ['The Shining', 'IT']
  },
  {   id: 5,
    name: 'Charles Dickens',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/200px-Dickens_Gurney_head.jpg",
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {   id: 6,
    name: 'William Shakespeare',
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg",
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }

];

data.selectGame = function(){
	var books = _.shuffle(this.reduce(function(p,c){
		return p.concat(c.books)
	},[])).slice(0,4);

	var answer = books[_.random(books.length-1)];

	return {
		books: books,
		author: _.find(this, function(author){
			return author.books.some(function(title){
				return title === answer;

			})
		}),
     checkAnswer(title){
     	return this.author.books.some(function(t){
     		return t === title;
     	});
     }


	}

};



 export default Quiz;
