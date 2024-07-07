import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./Login.css";  // Import your custom CSS file

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [btnstatus, setBtnsatus] = useState(false);
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setBtnsatus(true);
        try {
            await loginUser(username, password);
            navigate('/');
            setUsername('');
            setPassword('');
            setBtnsatus(false);
        } catch (error) {
            console.error('Login failed:', error);
            alert('Invalid credentials');
            setUsername('');
            setPassword('');
            setBtnsatus(false);
        }
    };

    return (
        <div className="login-container d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit} className="login-form p-4 rounded shadow">
                <h2 className="text-center mb-4">Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block" disabled={btnstatus} >Login</button>
            </form>
        </div>
    );
};

export default Login;
