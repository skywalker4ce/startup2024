import React from 'react';
import { useNavigate } from "react-router-dom";

export function Scale() {

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        navigate('/database');
    }

    return (
        <main className="container text-center mb-auto">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h2 className="mb-4">Category</h2>
                    <div className="rating-buttons">
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
            </div>

            <div className="text-center mt-5">
                <p>This is a link that will get you to the database page:</p>
                <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
                    <button type="submit" className="btn btn-success">Database</button>
                </form>
            </div>
        </main>
    )
}