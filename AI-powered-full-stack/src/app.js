const express = require('express');

const app = express();

app.use(express.json());

// Require all the route here
const authRouter = require('./routes/auth.route');

// Using All the Routes Here
app.use('/api/auth', authRouter);

module.exports = app;