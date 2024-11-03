import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
    return (
        <>
            <div className="text-center mb-5">
                <p className="lead">Login to create your own rating or view someone else's!</p>
            </div>

            <form method="get" action="index1.html" className="mx-auto" style="max-width: 400px;">
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="your@email.com" required />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="password" required />
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <button type="submit" className="btn btn-secondary">Create</button>
                </div>
            </form>
        </>
    )
}