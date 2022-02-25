const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());
app.use('/api/coeliacs', require('./routes/coeliacRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));
