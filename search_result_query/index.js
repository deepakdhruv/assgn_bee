const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const items = ['book', 'movie', 'phone', 'laptop'];

app.get('/search', (req, res) => {
    const searchQuery = req.query.q;
    let results = [];

    if (searchQuery) {
        results = items.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    res.render('search', { searchQuery, results });
});

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});
