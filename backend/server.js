const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const cors = require('cors');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/coeliacs', require('./routes/coeliacRoutes'));

app.use(cors());
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
