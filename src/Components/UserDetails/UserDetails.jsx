import React from 'react';
import { Link } from 'react-router';

const UserDetails = ({user}) => {
    const box = {
        border : "10px solid red",
        padding: "5px",
        margin: "20px"
    }
    return (
        <div style={box}>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <h3>{user.id}</h3>
            <Link to={``}>Show Details</Link>
        </div>
    );
};

export default UserDetails;