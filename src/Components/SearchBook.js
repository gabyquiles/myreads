import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class SearchBook extends Component {
    state = {
        books: [],
        hasError: false
    };

    searchBooks(query) {
        this.setState(() => ({hasError: false}));
        BooksAPI.search(query.trim()).then((books) => {
            (books && 'error' in books) ? this.setState(() => ({hasError: true})) : this.setState(() => ({books}));
        })
    }

    render() {
        const {books, hasError} = this.state;
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
                {!hasError ?
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {books && books.map((book) => (
                                <li key={book.id}>
                                    <Book bookId={book.id}/>
                                </li>
                            ))}
                        </ol>
                    </div> :
                    <div>
                        <h2>No books found</h2>
                    </div>
                }
            </div>
        )
    }
}

export default SearchBook;