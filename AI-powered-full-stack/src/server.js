require("dotenv").config({path: "../.env"});
const app = require('./app');
const connectToDB = require('./config/database');

connectToDB();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});