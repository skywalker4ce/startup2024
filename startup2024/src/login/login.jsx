import React, { useState } from 'react';

// import { Unauthenticated } from './unauthenticated';
// import { Authenticated } from './authenticated';
// import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Email:', email);
        console.log('Password:', password);

        if (email && password) {
            localStorage.setItem('userName', email); 
            onAuthChange(email, authState.Authenticated); 
            navigate('/create'); 
        }
    };

    return (
        <>
            <div className="text-center mb-5">
                <p className="lead">Login to create your own rating or view someone else's!</p>
            </div>

            <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <button type="button" className="btn btn-secondary">Create</button>
                </div>
            </form>
        </>
    );
}
