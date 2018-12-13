import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';

class BookShelf extends Component {
    state = {

    }

    render() {
        const { shelf, books } = this.props;
        console.log(this.props);

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ shelf }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter( book => book.shelf === 'currentlyReading').map( book => (
                        <li key={ book.id }>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${ book.imageLinks.thumbnail }")` }}></div>
                                    <div className="book-shelf-changer">
                                        <select>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading" className="mark-option ">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{ book.title }</div>
                                <div className="book-authors">{ book.authors }</div>
                            </div>
                        </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }

}

export default BookShelf
