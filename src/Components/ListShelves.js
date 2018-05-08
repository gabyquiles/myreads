import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Shelf from "./Shelf";

const ListShelves = ({books, changeShelf}) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf name="Currently Reading"
                           books={books.filter((book) => (book.shelf === "currentlyReading"))}
                           changeShelf={changeShelf}/>
                    <Shelf name="Want To Read" books={books.filter((book) => (book.shelf === "wantToRead"))}
                           changeShelf={changeShelf}/>
                    <Shelf name="Read" books={books.filter((book) => (book.shelf === "read"))}
                           changeShelf={changeShelf}/>

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
};

ListShelves.PropTypes = {
    books: PropTypes.array.isRequired,
    refreshBooks: PropTypes.func
};

export default ListShelves;