const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Test route to verify server functionality
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});