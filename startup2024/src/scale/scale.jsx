import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ChatNotifier, ChatEvent } from './websocketchat';

export function Scale() {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const handleEvent = (event) => {
            if (event.type === ChatEvent.Message || event.type === ChatEvent.System) {
                const messageText = event.type === ChatEvent.Message ? `${event.from}: ${event.value.msg}` : `[System] ${event.value.msg}`;
                setMessages((prev) => [...prev, messageText]);
            }
        };

        ChatNotifier.addHandler(handleEvent);

        return () => {
            ChatNotifier.removeHandler(handleEvent);
        };
    }, []);

    const sendMessage = () => {
        if (message.trim() !== "") {
            ChatNotifier.broadcastMessage('User', { msg: message });
            setMessage("");
        }
    };

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
            <div className="row d-flex justify-content-between align-items-start mb-4">
                <div className="col-md-3 text-start">
                    <button onClick={handleLogout} className="btn btn-logout">Logout</button>
                </div>
                <div className="col-md-3 text-end">
                    <button onClick={handleBack} className="btn btn-logout">Back</button>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <div className="chat-box border p-3" style={{ height: "400px", overflowY: "scroll", backgroundColor: "#f9f9f9" }}>
                        {messages.map((msg, index) => (
                            <div key={index} className="message">{msg}</div>
                        ))}
                    </div>
                    <div className="input-group mt-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button onClick={sendMessage} className="btn btn-primary">Send</button>
                    </div>
                </div>

                <div className="col-md-9">
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
