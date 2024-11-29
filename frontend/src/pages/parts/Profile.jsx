import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [orders, setOrders] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch the user's profile and orders
        const fetchProfile = async () => {
            try {
                const response = await fetch('/profile/');
                const data = await response.json();
                setUser(data.user);
                setOrders(data.orders);
            } catch (error) {
                console.error('Failed to load profile', error);
            }
        };
        fetchProfile();
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    <h2>Hello, {user.username}!</h2>
                    <h3>Your Orders:</h3>
                    {orders.length ? (
                        <ul>
                            {orders.map(order => (
                                <li key={order.id}>
                                    Order #{order.id} - Status: {order.status}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No orders found.</p>
                    )}
                </div>
            ) : (
                <p>Please log in to view your profile.</p>
            )}
        </div>
    );
};

export default Profile;
