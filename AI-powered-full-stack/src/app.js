const express = require('express');
const cookieParser = require("cookie-parser")

const app = express();

app.use(express.json());
app.use(cookieParser()); 

// Require all the route here
const authRouter = require('./routes/auth.route');

// Using All the Routes Here
app.use('/api/auth', authRouter);

module.exports = app;