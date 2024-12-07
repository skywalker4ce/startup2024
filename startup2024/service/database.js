const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false });
const db = client.db('startup');
const userCollection = db.collection('user');
const ratingCollection = db.collection('rating');
const categoryCollection = db.collection('category');

async function getUser(email) {
  return await userCollection.findOne({ email });
}

async function getUserByToken(token) {
  return await userCollection.findOne({ token });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = { email, password: passwordHash, token: uuid.v4() };
  await userCollection.insertOne(user);
  return user;
}

async function addRating(userId, category, subCategory, ratingValue) {
  const rating = {
    userId,
    category,
    subCategory,
    rating: ratingValue,
    timestamp: new Date(),
  };
  await ratingCollection.insertOne(rating);
}

async function getRatings(userId) {
  return await ratingCollection.find({ userId }).toArray();
}

async function getCategories() {
  return await categoryCollection.find().toArray();
}

async function addCategory(category) {
  await categoryCollection.insertOne({ name: category });
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addRating,
  getRatings,
  getCategories,
  addCategory
};
