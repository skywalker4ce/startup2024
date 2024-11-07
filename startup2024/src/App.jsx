import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Create } from './create/create';
import { Scale } from './scale/scale';
import { About } from './about/about';
import { Database } from './database';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';



function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);
    return (
        <BrowserRouter>
            <div className="container mt-5">
                <header className="text-center mb-4">
                    <div className="header-content">
                        <h1 className="display-4">Welcome to RateIt!<sup>&reg;</sup></h1>
                        <hr className="my-4" />
                    </div>
                </header>

                <Routes>
                    <Route
                        path='/'
                        element={
                            <Login
                                userName={userName}
                                authState={authState}
                                onAuthChange={(userName, authState) => {
                                    setAuthState(authState);
                                    setUserName(userName);
                                }}
                            />
                        }
                        exact
                    />
                    <Route path='/create' element={<Create userName={userName} />} />
                    <Route path='/scale' element={<Scale />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/database' element={<Database />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="text-center mt-5">
                    <hr />
                    <span>Skyler's GitHub: </span>
                    <a href="https://github.com/skywalker4ce/startup2024/blob/main/cs260/README.md" className="text-decoration-none">GitHub</a>
                    <br />
                    <a href="index4.html" className="text-decoration-none">Read about RateIt</a>
                </footer>
            </div>
        </BrowserRouter>

    )
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }

  export default App;
