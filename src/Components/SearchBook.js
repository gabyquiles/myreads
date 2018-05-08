import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class SearchBook extends Component {
    static propTypes = {
        changeShelf: PropTypes.func,
        myBooks: PropTypes.array.isRequired
    };

    state = {
        searchResults: []
    };

    searchBooks(query) {
        if (query !== "") {
            BooksAPI.search(query.trim()).then((searchResults) => {
                (searchResults && 'error' in searchResults) ? this.setState(() => ({searchResults: []})) : this.setState(() => ({searchResults}));
            })
        }
    }

    render() {
        console.log("Rendering");
        const searchResults = this.state.searchResults;
        const myBooks = this.props.myBooks;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search"
                    >
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                               onChange={(event) => this.searchBooks(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchResults && searchResults.map((book) => {
                            const myBook = myBooks.filter((myBook) => (myBook.id === book.id));
                            const bookToDisplay = myBook.length > 0 ? myBook[0] : book;
                            return (
                                <li key={bookToDisplay.id}>
                                    <Book book={bookToDisplay} changeShelf={this.props.changeShelf}/>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook;