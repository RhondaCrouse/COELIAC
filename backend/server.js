const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/coeliacs', require('./routes/coeliacRoutes'));

app.use(cors());
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
