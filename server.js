require('dotenv').config();
require('./config/database');
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);
app.use('/assets', express.static('./assets'));

app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0', () => console.log(`server ready on PORT + ${process.env.PORT || 4000}`))