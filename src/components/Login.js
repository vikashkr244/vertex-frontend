import React, { useState } from 'react';
import axios from 'axios';
import '../styles/FormWrapper.css'; // Ensure the correct path to your CSS file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // For success/error messages

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Send POST request to the login endpoint
            const response = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password
            });

            // Use response data if needed (e.g., token, user details)
            const { token, user } = response.data;
            console.log('User:', user);
            console.log('Token:', token);

            // Display success message
            setMessage('Login successful! Redirecting...');

            // Clear form fields
            setEmail('');
            setPassword('');

            // Redirect or perform additional actions after login
            setTimeout(() => {
                window.location.href = '/dashboard'; // Example redirect
            }, 2000);
        } catch (error) {
            // Display error message
            setMessage(error.response?.data?.error || 'Login failed. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn-primary">Login</button>
            </form>
            {message && <p>{message}</p>} {/* Display success or error message */}
        </div>
    );
};

export default Login;
