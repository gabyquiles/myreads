import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Shelf extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    };

    render() {
        const {name, books} = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id}>
                                <Book book={book}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf;