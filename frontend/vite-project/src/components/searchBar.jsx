import React, { useState } from 'react'
import axios from 'axios';
import './searchBar.css'

const SearchBar = () => {
    const [name, setname] = useState('');

    function chInputData(event) {
        setname(event.target.value);
    }

    const addInputData = async () => {
        try {
            const res = await axios.post("http://localhost:4000/api/user/add", {
                name,
            });
            console.log(res.data);
            alert("User added successfully!");
        } catch (err) {
            console.error(err);
            alert("Error adding user");
        }
        setname("");
    }

    return (
        <div className="SearchBar">
            <input
                placeholder="Enter new user name"
                onChange={chInputData}
                value={name}
                className="search-input"
            />
            <button className="add-button" onClick={addInputData}>Add</button>
        </div>

    )
}

export default SearchBar
