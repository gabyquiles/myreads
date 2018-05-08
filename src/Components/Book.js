import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func,
    };

    handleShelfChange = (e) => {
        if (this.props.changeShelf) {
            const bookToUpdate = this.props.book;
            const newShelf = e.target.value;
            this.props.changeShelf(bookToUpdate, newShelf);
        }
    };

    render() {
        const book = this.props.book;
        return (
            <div className="book">
                <div className="book-top">
                    {book.imageLinks && book.imageLinks.thumbnail ? (
                        <div className="book-cover"
                             style={{
                                 width: 128,
                                 height: 193,
                                 backgroundImage: `url(${book.imageLinks.thumbnail})`
                             }}></div>) : ''}
                    <div className="book-shelf-changer">
                        <select value={book.shelf ? book.shelf : "none"} onChange={this.handleShelfChange} name="shelf">
                            <option disabled>Move to...</option>
                            <option value="currentlyReading">Currently
                                Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(", ") : "Unknown"}</div>
            </div>
        )
    }
}

export default Book;