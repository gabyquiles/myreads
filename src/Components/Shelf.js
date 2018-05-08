import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = ({name, books, changeShelf}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <li key={book.id}>
                            <Book book={book} changeShelf={changeShelf}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
};

Shelf.PropTypes = {
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
};

export default Shelf;