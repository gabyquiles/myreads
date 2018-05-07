import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

import * as BooksAPI from '../BooksAPI';

class Book extends Component {
    static propTypes = {
        bookId: PropTypes.string
    };
    state = {
        book: undefined
    };

    componentDidMount() {
        const bookId = this.props.bookId;
        BooksAPI.get(bookId).then((book) => {
            this.setState({book});
        })
    }

    render() {
        const book = this.state.book;
        return (
            book ?
                <div className="book">
                    <div className="book-top">
                        {book.imageLinks && book.imageLinks.thumbnail ? (
                            <div className="book-cover"
                                 style={{
                                     width: 128,
                                     height: 193,
                                     backgroundImage: `url(${book.imageLinks.thumbnail})`
                                 }}></div>) : ''}
                        <BookShelfChanger currentShelf={book.shelf ? book.shelf : "none"}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors ? book.authors.join(", ") : "Unknown"}</div>
                </div>
                :
                <div className="loader"></div>
        )
    }
}

export default Book;