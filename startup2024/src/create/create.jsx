import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

export function Create() {
  const [foodItem, setFoodItem] = useState("Category Loading...");
  const [rating, setRating] = useState(1); // State for rating
  const randomIndex = Math.floor(Math.random() * 12);
  const location = useLocation(); // Detect navigation
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data whenever this component is revisited
    fetch('https://openlibrary.org/subjects/fantasy.json')
      .then(response => response.json())
      .then(data => setFoodItem(data.works[randomIndex].title));
  }, [location]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRating = {
      category: event.target.newCategory.value,
      subCategory: event.target.subCategory.value,
      rating: rating, // Capture the rating value
    };

    // Send new rating data to the backend
    fetch('/api/rating', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRating),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Rating added:', data);
      navigate('/scale'); // Redirect to scale page
    })
    .catch(error => {
      console.error('Error adding rating:', error);
    });
  };

  const handleLogout = (event) => {
    event.preventDefault();
    navigate("/", { replace: true });
    window.location.reload(); // Forces a reload, ensuring links work
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        <div className="col-md-3">
          <button onClick={handleLogout} className="btn btn-logout">Logout</button>
          <br />
          <br />
          <p className="lead">See another RateIt!<sup>&reg;</sup></p>
          <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username: </label>
              <input type="text" id="username" className="form-control" placeholder="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="select" className="form-label">Category: </label>
              <select id="select" name="varSelect" className="form-select">
                <option>Lemonade</option>
                <option selected>Burgers</option>
                <option>Restaurants</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

        <div className="col-md-4 text-center">
          <br />
          <br />
          <h2 className="mb-4">Random Book Category: {foodItem}</h2>
          <div className="rating-buttons d-flex flex-column align-items-center">
            {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map(num => (
              <button
                key={num}
                className="rating-btn"
                data-rating={num}
                onClick={() => setRating(num)} // Set rating on button click
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div className="col-md-3">
          <br />
          <br />
          <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
            <p className="lead">Add your own rating:</p>
            <div className="mb-3">
              <label htmlFor="newCategory" className="form-label">New Category: </label>
              <input type="text" id="newCategory" className="form-control" placeholder="category" />
            </div>
            <div className="mb-3">
              <label htmlFor="subCategory" className="form-label">Thing you are rating: </label>
              <input type="text" id="subCategory" className="form-control" placeholder="subcategory item" />
            </div>
            <div className="mb-4">
              <label htmlFor="range" className="form-label">Rating: </label>
              <input type="range" className="form-range" name="varRange" id="range" min="1" max="10" step="1" value={rating} onChange={(e) => setRating(parseInt(e.target.value))} />
              <output id="rangeOutput" htmlFor="range">{rating}</output>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
