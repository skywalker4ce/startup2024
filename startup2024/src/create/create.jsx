import React from 'react';
import { useNavigate } from "react-router-dom";

export function Create() {

  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/scale');
  }
  const handleLogout = () => {
    navigate('/App');
  }


  return (
    <div className="container">

      <div className="row d-flex justify-content-between">

        <div className="col-md-3">
          <button onClick={handleLogout} className="btn btn-logout">Logout</button>
          <br />
          <br></br>
          <p className="lead">See another RateIt!<sup>&reg;</sup></p>
          <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
            <div className="mb-3">
              <label for="username" className="form-label">Username: </label>
              <input type="text" id="username" className="form-control" placeholder="username" />
            </div>
            <div className="mb-3">
              <label for="select" className="form-label">Category: </label>
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
          <br></br>
          <br></br>
          <div className="rating-buttons d-flex flex-column align-items-center">
            <button className="rating-btn" data-rating="10">10</button>
            <button className="rating-btn" data-rating="9">9</button>
            <button className="rating-btn" data-rating="8">8</button>
            <button className="rating-btn" data-rating="7">7</button>
            <button className="rating-btn" data-rating="6">6</button>
            <button className="rating-btn" data-rating="5">5</button>
            <button className="rating-btn" data-rating="4">4</button>
            <button className="rating-btn" data-rating="3">3</button>
            <button className="rating-btn" data-rating="2">2</button>
            <button className="rating-btn" data-rating="1">1</button>
          </div>
        </div>

        <div className="col-md-3">
          <br></br>
          <br></br>
          <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
            <p className="lead">Add your own rating:</p>
            <div className="mb-3">
              <label for="newCategory" className="form-label">New Category: </label>
              <input type="text" id="newCategory" className="form-control" placeholder="category" />
            </div>
            <div className="mb-3">
              <label for="subCategory" className="form-label">Thing you are rating: </label>
              <input type="text" id="subCategory" className="form-control" placeholder="subcategory item" />
            </div>
            <div className="mb-4">
              <label for="range" className="form-label">Rating: </label>
              <input type="range" className="form-range" name="varRange" id="range" min="1" max="10" step="1" value="1" />
              <output id="rangeOutput" for="range">1</output>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>

    </div>
  )
}