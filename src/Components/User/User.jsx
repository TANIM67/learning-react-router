import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import UserDetails from '../UserDetails/UserDetails';

const User = () => {
    const users = useLoaderData();
    return (
        <div>
            {
                users.map(user => <UserDetails key = {user.id} user = {user}></UserDetails>)
            }
        </div>
    );
};

export default User;