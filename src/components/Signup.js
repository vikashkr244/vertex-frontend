import React, { useState } from 'react';
import axios from 'axios';
import '../styles/FormWrapper.css'; // Updated path

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // For success/error messages

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            // Send POST request to the signup endpoint
            const response = await axios.post('http://localhost:5000/api/users/signup', {
                name,
                email,
                password
            });

            // Display success message
            setMessage(response.data.message);
            
            // Clear form fields
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            // Display error message
            setMessage(error.response?.data?.error || 'Signup failed');
        }
    };

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                <button type="submit" className="btn-primary">Sign Up</button>
            </form>
            {message && <p>{message}</p>} {/* Display message */}
        </div>
    );
};

export default Signup;
