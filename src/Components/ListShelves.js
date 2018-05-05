import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Shelf from "./Shelf";

class ListShelves extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    };

    render() {
        const books = this.props.books;

        return (
        <div>
            <ul>
                <li><Shelf name="Currently Reading" books={books.filter((book) => (book.shelf === "currentlyReading"))}/></li>
                <li><Shelf name="Want To Read" books={books.filter((book) => (book.shelf === "wantToRead"))}/></li>
                <li><Shelf name="Read" books={books.filter((book) => (book.shelf === "read"))}/></li>
            </ul>
        </div>
        )
    }
}

export default ListShelves;