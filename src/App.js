import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListShelves from './Components/ListShelves';
import SearchBook from './Components/SearchBook';
import './App.css';

class App extends Component {
    state = {
        "books": []
    };

    changeShelf = (bookToUpdate, shelf) => {
        BooksAPI.update(bookToUpdate, shelf).then((result) => {
            this.refreshBooks();
        })
    };

    refreshBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState(() => ({
                books
            }))
        })
    };

    componentDidMount() {
        this.refreshBooks();
    }

    render() {
        const myBooks = this.state.books;
        console.log(myBooks);
        return (
            <div>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <ListShelves books={myBooks} changeShelf={this.changeShelf}/>
                    )}
                />
                <Route
                    path="/search"
                    render={() => (
                        <SearchBook changeShelf={this.changeShelf} myBooks={myBooks}/>
                    )}
                />
            </div>
        );
    }
}

export default App;
