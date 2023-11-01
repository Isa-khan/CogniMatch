const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());





app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );

    res.setHeader("Access-Control-Allow-Methods", 
    "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});


app.post("/api/posts", (req, res, next) => {
    // databse component
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added successfully'
    });
});

app.get('/api/posts', (req, res, next) => {
    const posts = [
      {
    id: 'fadf12421l', 
    title: 'First Server Side post', 
    content: 'This is coming from the server'
    }, 
    {
    id: 'wqwrgorjrb', 
    title: 'Second Server Side post', 
    content: 'This is coming from the server!'
    }

    ];
    res.status(200).json({
        message: 'Post fetched sucessfully',
        posts: posts
    });
});

module.exports = app; // exports all the above










