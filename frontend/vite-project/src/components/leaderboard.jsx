// UserList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './leaderboard.css'

const UserList = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await axios.get("http://localhost:4000/api/user/get");
            setUsers(res.data);
        } catch (err) {
            console.error(err);
            alert("Failed to load users");
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="user-list-container">
            <h2 className="leaderboard-title">User Leaderboard</h2>
            <ul className="user-list">
                {users.map((user, index) => (
                    <li key={user._id} className="user-item">
                        <span className="rank">{index + 1}.</span>
                        <span className="username">{user.name}</span>
                        <span className="points">{user.points} pts</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
