import React, { use } from 'react';

const User2 = ({userPromise}) => {
    const user = use(userPromise);
    console.log(user);
    return (
        <div>
            <h2>This is user data showing with suspense</h2>
        </div>
    );
};

export default User2;