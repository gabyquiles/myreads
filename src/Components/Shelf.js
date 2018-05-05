import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Shelf extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    };

    render() {
        const {name, books} = this.props;

        return (
            <div>
                <h2>{name}</h2>
                <ul>
                    {books.map((book) => (<li>{book.title}</li>))}
                </ul>
            </div>
        )
    }
}

export default Shelf;