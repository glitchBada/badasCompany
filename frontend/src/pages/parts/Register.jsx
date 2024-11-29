// import React, { useState } from 'react';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password1: '',
//         password2: ''
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Send a POST request to Django's registration endpoint
//         try {
//             const response = await fetch('http://localhost:8000/register/', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(formData)
//             });
//             if (response.ok) {
//                 // Handle successful registration, like redirecting to the login page
//             }
//         } catch (error) {
//             console.error('Registration failed', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="username" placeholder="Username" onChange={handleChange} />
//             <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//             <input type="password" name="password1" placeholder="Password" onChange={handleChange} />
//             <input type="password" name="password2" placeholder="Confirm Password" onChange={handleChange} />
//             <button type="submit">Register</button>
//         </form>
//     );
// };

// export default Register;

import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            
        });
        
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages
        setError(''); // Clear previous errors

        try {
            const response = await fetch('http://localhost:8000/api/profiles/', { 
                method: 'POST', 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: "",
                    email: "",
                    password1: '',
                    password2: '',
                }),
            });
            
            const data = await response.json();

            if (response.ok) {
                setMessage(data.message); // Display success message
                setFormData({ username: '', email: '', password1: '', password2: '' }); // Clear form
            } else {
                setError(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Registration failed', error);
            setError('Failed to connect to the server. Please try again later.');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password1"
                    placeholder="Password"
                    value={formData.password1}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password2"
                    placeholder="Confirm Password"
                    value={formData.password2}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
