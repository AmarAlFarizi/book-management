const express = require('express');
const routes = require('./routes');
const connectDB = require('./config/mongodb');
require("dotenv").config({ path: "./src/.env" });

const app = express();
const port = process.env.PORT || 3000;

const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const borrowerRoutes = require('./routes/borrowerRoutes');
const borrowBookRoutes = require('./routes/borrowBookRoutes');

connectDB();

app.use(express.json());

app.use("/api/v1", routes);  
app.use('/api/authors', authorRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/borrowers', borrowerRoutes);
app.use('/api/borrow', borrowBookRoutes);  
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;