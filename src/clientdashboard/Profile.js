import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../clientdashboardcss/Profile.module.css';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch user profile data
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming JWT is stored in localStorage
                const response = await axios.get('http://localhost:5000/api/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserData(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load profile data. Please try again.');
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return <div className="profile-container">Loading profile...</div>;
    }

    if (error) {
        return <div className="profile-container error">{error}</div>;
    }

    return (
        <div className="profile-container">
            <h2>Your Profile</h2>
            <div className="profile-card">
                <p><strong>Name:</strong> {userData.name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Joined On:</strong> {new Date(userData.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default Profile;
