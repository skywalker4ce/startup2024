import React from 'react';
import { useNavigate } from "react-router-dom";

export function Scale() {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/database');
    }

    const handleLogout = (event) => {
        event.preventDefault();
        navigate("/", { replace: true });
        window.location.reload();
    };

    const handleBack = (event) => {
        event.preventDefault();
        navigate("/create", { replace: true });
        window.location.reload();
    };

    return (
        <main className="container text-center mb-auto">

            {/* Row to position Logout and Back buttons on the left and right */}
            <div className="row d-flex justify-content-between align-items-start mb-4">
                <div className="col-md-3 text-start">
                    <button onClick={handleLogout} className="btn btn-logout">Logout</button>
                </div>
                <div className="col-md-3 text-end">
                    <button onClick={handleBack} className="btn btn-logout">Back</button>
                </div>
            </div>

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
        </main>
    );
}
