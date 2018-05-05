import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Shelf from "./Shelf";

class ListShelves extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    };

    render() {
        const books = this.props.books;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf name="Currently Reading"
                               books={books.filter((book) => (book.shelf === "currentlyReading"))}/>
                        <Shelf name="Want To Read" books={books.filter((book) => (book.shelf === "wantToRead"))}/>
                        <Shelf name="Read" books={books.filter((book) => (book.shelf === "read"))}/>

                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to="/search"
                    >
                        Add a book
                    </Link>
                </div>
            </div>
        )
    }
}

export default ListShelves;