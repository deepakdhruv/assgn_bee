const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [];

app.get('/', (req, res) => {
    res.redirect('/posts');
});

app.get('/posts', (req, res) => {
    res.render('posts', { posts: posts });
});

app.post('/add-post', (req, res) => {
    const newPost = { title: req.body.title, body: req.body.body };
    posts.push(newPost);
    res.redirect('/posts');
});

app.get('/posts/:title', (req, res) => {
    const postTitle = req.params.title;
    const post = posts.find(p => p.title === postTitle);
    if (post) {
        res.render('postDetail', { post: post });
    } else {
        res.send('Post not found');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
