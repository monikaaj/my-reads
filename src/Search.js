import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import sortBy from "sort-by";
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from "./BooksAPI";


class Search extends Component {
  state = {
    query: ''
  };

  updateQuery = (query) => {
    this.setState(
      {
        query: query.trim()
      }
    )
    if(query) {
      BooksAPI.search(query).then((books) => {
        console.log(books);
      })
    }
  }

  render() {
    const { query } = this.state;
    const { books } = this.props;
    let showingBooks;

    console.log(books);
    if (query) {
    } else {
      showingBooks = [];
    }

    console.log(showingBooks)

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search"></Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"
            value={this.state.query} 
            onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" 

          />
        </div>
      </div>
    );
  }
}

export default Search
