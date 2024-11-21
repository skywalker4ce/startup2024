import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

// import { Unauthenticated } from './unauthenticated';
// import { Authenticated } from './authenticated';
// import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [displayError, setDisplayError] = React.useState(null);

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

    async function loginUser() {
        loginOrCreate(`/api/auth/login`);
    }

    async function createUser() {
        loginOrCreate(`/api/auth/create`);
    }

    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ email: userName, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('userName', userName);
            props.onLogin(userName);
        } else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }

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
                    <Button type='submit' onClick={() => loginUser()} disabled={!userName || !password}>
                        Login
                    </Button>
                    <Button type='submit' onClick={() => createUser()} disabled={!userName || !password}>
                        Create
                    </Button>
                </div>
            </form>
            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </>
    );
}
