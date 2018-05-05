import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import ListShelves from './Components/ListShelves';
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
            <ListShelves books={this.state.books}/>
        );
    }
}

export default App;
