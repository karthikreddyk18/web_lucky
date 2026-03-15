const express = require('express');
const mongoose = require('mongoose');
const productController = require('./productControllers');

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Database Connection
const DB = 'mongodb://localhost:27017/productDB'; // Replace with your URI
mongoose.connect(DB).then(() => console.log('DB connection successful!'));

// Routes
app.get('/api/products', productController.getAllProducts);
app.post('/api/products', productController.createProduct);

// Server Start
const port = 5000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});