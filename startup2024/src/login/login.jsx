import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { MessageDialog } from "./messageDialog";

export function Login({ authState, onAuthChange }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayError, setDisplayError] = useState(null);
    const navigate = useNavigate();

    async function loginUser() {
        await loginOrCreate("/api/auth/login");
    }

    async function createUser() {
        await loginOrCreate("/api/auth/create");
    }

    async function loginOrCreate(endpoint) {
        try {
            
            const response = await fetch(endpoint, {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            console.log("Your mom")
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("userName", email); // Save email in local storage
                onAuthChange(email, authState.Authenticated); // Notify parent component
                setDisplayError(null); // Clear any error messages
                navigate("/create"); // Redirect user
            } else {
                const body = await response.json();
                setDisplayError(`⚠ Error: ${body.msg}`);
            }
        } catch (error) {
            setDisplayError("⚠ Error: Unable to connect to the server.");
        }
    }

    return (
        <>
            <div className="text-center mb-5">
                <p className="lead">Login to create your own rating or view someone else's!</p>
            </div>

            <form className="mx-auto" style={{ maxWidth: "400px" }} onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                    <Button type="button" onClick={loginUser} disabled={!email || !password}>
                        Login
                    </Button>
                    <Button type="button" onClick={createUser} disabled={!email || !password}>
                        Create
                    </Button>
                </div>
            </form>
            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} className="custom-dialog" />
        </>
    );
}

