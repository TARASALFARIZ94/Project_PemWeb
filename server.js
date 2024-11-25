const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const errorhandler = require('./middleware/errorhandler');
const itemroute = require('./route/itemroute');

app.use(express.json());

app.use('/items', itemroute);

app.use(logger);

app.use(errorhandler);


app.listen(3000, ()=> console.log('Server is running on port http://localhost:3000'));