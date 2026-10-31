import React, { use } from 'react';
import { useLoaderData } from 'react-router';

const User = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div>
            <h2>This is user data showing without using suspense</h2>
        </div>
    );
};

export default User;