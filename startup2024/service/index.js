const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Serve up the front-end static content hosting
app.use(express.static('public'));

app.use(express.json());

app.use(cookieParser());

app.set('trust proxy', true);

const path = require("path");

// Serve React app
app.use(express.static(path.join(__dirname))); // Serve React static files

// Fallback route to serve index.html for client-side routing
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Test route to verify server functionality
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// GetRating
let rating = {}; // Store ratings in memory for simplicity
apiRouter.get('/rating', (_req, res) => {
  res.json(rating);
});

// PostRating
apiRouter.post('/rating', async (req, res) => {
  const { token, category, subCategory, ratingValue } = req.body;

  if (!token || !category || !subCategory || !ratingValue) {
    return res.status(400).send({ msg: 'Invalid data' });
  }

  try {
    const user = await DB.getUserByToken(token);
    if (user) {
      await DB.addRating(user._id, category, subCategory, ratingValue);
      res.status(201).send({ msg: 'Rating saved successfully' });
    } else {
      res.status(401).send({ msg: 'Unauthorized' });
    }
  } catch (error) {
    console.error('Error saving rating:', error);
    res.status(500).send({ msg: 'Internal server error' });
  }
});


// GetCategories
let categories = {}; // Store categories in memory for simplicity
apiRouter.get('/categories', (_req, res) => {
  res.json(categories);
});

// PostCategories
apiRouter.post('/categories', (req, res) => {
  const newCategories = req.body;

  if (!newCategories || !Array.isArray(newCategories)) {
    return res.status(400).send({ msg: 'Invalid data' });
  }

  categories = { ...categories, ...newCategories };
  res.status(201).send({ msg: 'Categories updated successfully' });
});

// Start the server
const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);
