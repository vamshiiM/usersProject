import React from 'react'
import './people.css';
import { useState, useEffect } from 'react';
import axios from "axios";


const People = () => {

    const [users, setUsers] = useState([]);

    const givePoints = async (userId) => {
        try {
            const res = await axios.post("http://localhost:4000/api/points/addpoints", {
                userId: userId,
            });
            console.log(res.data);
            fetchUsers(); // Refresh users after updating points
            alert("points updated successfully refresh plz")
        } catch (error) {
            console.log(error);
            alert("Failed to give points");
        }
    }

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
            <h2 className="title">User Names</h2>
            <div className="user-list">
                {users.map((user, index) => (
                    <div className="user-card" key={user._id}>
                        <span className="user-name">{index + 1}. {user.name}</span>
                        <button className="give-button" onClick={() => givePoints(user._id)}>add points</button>
                    </div>
                ))}
            </div>
        </div>

    );


}

export default People;
