import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './App.css';
// var _ = require('lodash');

import _ from 'lodash';

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
    imageUrl: "http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2015/06/09/jk-rowling.jpg",
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {   id: 4,
    name: 'Stephen King',
    imageUrl: "https://steemitimages.com/DQmNZi6hoUYS684Z5ygZ81LneDG3DA6xw8F1gWciD2QaA4Z/Stephen_King.jpg",
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
		})
	}

};

class Quiz extends Component {
   constructor () {
   	super();
   	this.state= data.selectGame();
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
                         <Book title={b} />
                         </div>
		                )
				       })}
			       </div>
			       <div className="col-md-1"></div>
		       </div>
       </div>
		)
	}
}




 export default Quiz;
