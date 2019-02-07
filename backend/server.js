const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// To attach endpoints to the server, we must gain access to express router
const bookRoutes = express.Router();

var PORT = process.env.PORT || 4000;

// Bring in Mongoose model
let Book = require('./Book.model');

// Create instance of cors with Express
app.use(cors());
app.use(bodyParser.json());

// Connect Mongoose to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Books', { useNewURLParser: true });
const connection = mongoose.connection;

// Mongoose- open parameter activates a callback once function is activated
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// Send HTTP post request (add)
bookRoutes.route('/add').post(function(req, res) {
    let book= new Book(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'book': 'book added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new book failed');
        });
});

// base route
app.use('/Books', bookRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
})