import React, {Component} from 'react';
import axios from 'axios';


class BookDisplay extends Component {
    constructor(props) {
        super(props);

        // This block of code is needed to grant access to the state for the following methods listed below
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Book_title: '',
            items: [],
            isLoaded: false,
        }
    }
  
    // Form handling function
    onChangeBookTitle(e) {
        this.setState({
            Book_title: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const myAPIKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
            const searchTitle = this.state.Book_title;
            console.log(searchTitle);
    
            this.setState({
                todo_description: '',
                todo_responsible: '',
                todo_priority: '',
                todo_completed: false
            })
    }    

    // run component did mount
    componentDidMount() {
    // call onsubmit handler function
    // call fetch method
    // 
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
            </div>
        )
    }
    
};

export default BookDisplay;