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

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState(() => ({
                books
            }))
        })
    }

    render() {
        return (
            <div>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <ListShelves books={this.state.books}/>
                    )}
                />
                <Route
                    path="/search"
                    render={() => (
                        <SearchBook/>
                    )}
                />
            </div>
        );
    }
}

export default App;
