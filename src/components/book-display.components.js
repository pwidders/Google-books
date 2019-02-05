import React, {Component} from 'react';
// import axios from 'axios';

class BookDisplay extends Component {
    constructor(props) {
        super(props);

        // This block of code is needed to grant access to the state for the following methods listed below
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Book_title: '',
            items: [],
            error: null
        };
    }
  
    // Form handling function
    onChangeBookTitle(e) {
        this.setState({
            Book_title: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
            const searchTitle = this.state.Book_title;
            // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
            // const API = "https://www.googleapis.com/books/v1/volumes?q=";
            // const myAPIKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
            this.setState({ isLoading: true });
            console.log(searchTitle);
            // console.log(myAPIKey);

            // axios.get(API + searchTitle + "&key=" + myAPIKey)
            // fetch(API + searchTitle + "&key=" + myAPIKey)
        // fetch(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`)
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTitle}&key=AIzaSyDApz1TkmkphP0oxEo0dFGbz-DgVvN9f_A`)
            .then(response => response.json())
            .then(result => this.setState({
                items: result.items
            }))
            .catch(error => this.setState({
                error
            }));

    }    

    render () {
        return (
            <div style= {{marginTop: 20}}>
                <h3>Search for a book:</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.Book_title} 
                            onChange={this.onChangeBookTitle}
                        />
                    </div>
                    
                    <div className="form-group">
                        <input 
                            type="submit"
                            value="Search book"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
                <div className= "container">
                    {this.state.items.map((item, index) => {
                        const thumbnail = (item.volumeInfo && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail) || ''
                        return (
                                <div key={index} className="card" style={{ margin: '10px', width: '300px', display: 'inline-block' }}>
                                    <img className="card-img-top" src= {thumbnail} alt="Card image thumbnail" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.volumeInfo.title}</h5>
                                        <p className="card-text">
                                        Author: {item.volumeInfo.authors}
                                        <br />
                                        Description: {item.volumeInfo.description}
                                        </p>
                                        <a href={item.volumeInfo.previewLink} className="btn btn-primary">Check it out!</a>
                                        {/* <button onClick={}>
                                            Add book
                                        </button> */}
                                    </div>
                                </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    
};

export default BookDisplay;