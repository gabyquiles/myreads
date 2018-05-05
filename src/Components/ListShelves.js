import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListShelves extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    };

    render() {
        const books = this.props.books;

        return (
        <div>
            <ul>
                {books.map((book) => (<li>{book.title}</li>))}
            </ul>
        </div>
        )
    }
}

export default ListShelves;