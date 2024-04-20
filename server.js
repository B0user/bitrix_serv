require('dotenv').config();
const 
    express = require('express'),
    app = express(),
    PORT = process.env.PORT || 8000,
    mongoose = require('mongoose'),
    connectDB = require('./utils/dbConnection');

// Connect to MongoDB
connectDB();


// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api', require('./routes'));


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});