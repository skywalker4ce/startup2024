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


// GetRating
apiRouter.get('/rating', (_req, res) => {
  res.send(rating);
});

// PostRating
apiRouter.post('/rating', (_req, res) => {
  // update the list of categories
  res.send(rating);
});

// GetCategories
apiRouter.get('/categories', (_req, res) => {
  res.send(categories);
});


// PostCategories
apiRouter.post('/categories', (_req, res) => {
  // update the list of categories
  res.send(categories);
});


// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});