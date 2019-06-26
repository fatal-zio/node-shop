const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  console.log('Add Product Middleware running!');
  res.send(
    '<form action="/product" method="POST"><input type="text" name-"title" /><button type="submit">Add Product</button></form>'
  );
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  console.log('Root Middleware running!');
  res.send('<h1>Root Page</h1>');
});

app.listen(3000);
