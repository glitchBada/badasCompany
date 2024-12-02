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

// // export default Register;

// import React, { useState } from 'react';

const Register = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password1: '',
//         password2: '',
//     });

//     const [message, setMessage] = useState('');
//     const [error, setError] = useState('');

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
            
//         });
        
        
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage(''); // Clear previous messages
//         setError(''); // Clear previous errors

//         try {
//             const response = await fetch('http://localhost:8000/api/profiles/', { 
//                 method: 'POST', 
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     username: "",
//                     email: "",
//                     password1: '',
//                     password2: '',
//                 }),
//             });
            
//             const data = await response.json();

//             if (response.ok) {
//                 setMessage(data.message); // Display success message
//                 setFormData({ username: '', email: '', password1: '', password2: '' }); // Clear form
//             } else {
//                 setError(data.error || 'Something went wrong. Please try again.');
//             }
//         } catch (error) {
//             console.error('Registration failed', error);
//             setError('Failed to connect to the server. Please try again later.');
//         }
//     };

import axios from "axios";
 
function saveDataToLocalStorage(data) {
    localStorage.setItem('userEmail', data.email);
    localStorage.setItem('userName', data.full_name);
    localStorage.setItem('userId', data.user_id);
    localStorage.setItem('userPhone', data.phone_number);
    localStorage.setItem('refreshToken', data.tokens.refresh);
    localStorage.setItem('accessToken', data.tokens.access);
}
 
export function loadDataFromLocalStorage() {
    return {
        userName: localStorage.getItem('userName'),
        userEmail: localStorage.getItem('userEmail'),
        userId: localStorage.getItem('userId'),
        userPhone: localStorage.getItem('userPhone'),
        userType: localStorage.getItem('userType'),
        refreshToken: localStorage.getItem('refreshToken'),
        accessToken: localStorage.getItem('accessToken'),
 
    };
}
 
 
export const apiUrl = 'https://api.lib-intuit.online'
 
export const baseApi = `${apiUrl}/api/`
 
export const registerPoint = `${baseApi}/accounts/register/`
export function registerPost(email, password, name, phone, setModalMessage, setModalOpen, navigate) {
    const data = new FormData();
 
    data.append('email', email)
    data.append('password', password)
    data.append('full_name', name)
    data.append('phone_number', phone)
    data.append('user_type', role)
    data.append('group', group)
 
    axios.post(registerPoint, data)
        .then((response) => {
            setModalMessage(
                `На вашу почту ${email} было отправлено подтвердение`
            );
            setModalOpen(true);
 
            setTimeout(() => {
                setModalOpen(false)
                // navigate('/')
            }, 2000)
 
            // alert("Ссылка активации отправлена к вам на почту!");
        })
        .catch((error) => {
            if (error.response.data.email) {
                setModalMessage(
                    `Email уже занят, попробуйте другой`
                );
                setModalOpen(true);
 
                setTimeout(() => {
                    setModalOpen(false)
                }, 2000)
                //alert("Email уже занят, попробуйте другой");
            }
            else if (error.response.data.group){
                setModalMessage(
                    "Укажите вашу группу"
                );
                setModalOpen(true);
 
                setTimeout(() => {
                    setModalOpen(false)
                }, 2500)
            }
            else if (error.response.data.user_type){
                setModalMessage(
                    "Выберите ваш тип профиля"
                );
                setModalOpen(true);
 
                setTimeout(() => {
                    setModalOpen(false)
                }, 2500)
            } else {
                setModalMessage(
                    `Проверьте правильность введенных данных и повторите попытку`
                );
                setModalOpen(true);
 
                setTimeout(() => {
                    setModalOpen(false)
                }, 3000)
            }
 
        })
}
 
 
export const loginPoint = `${baseApi}/accounts/login/`
export default function loginPost(email, password, modalOpen, setModalMessage, navigate) {
    const data = new FormData();
 
    data.append('email', email)
    data.append('password', password)
 
    axios.post(loginPoint, data)
        .then((response) => {
            saveDataToLocalStorage(response.data)
            console.log(response.data)
 
            // alert("Вы вошли и будете перенаправлены на главную страницу!")
            setModalMessage(
                `Вы успешно вошли в свой аккаунт и будете перенаправлены на главную страницу`
            );
            modalOpen(true)
 
 
            setTimeout(() => {
                navigate('/')
                window.location.reload()
            }, 3000)
 
 
            return true
        })
        .catch((error) => {
            if (error.response.data.non_field_errors) {
                // alert("Сначала активируйте свой email!")
                console.log(error.response)
                setModalMessage(
                    `${error.response.data.non_field_errors}, попробуйте ещё раз!`
                );
                modalOpen(true)
                setTimeout(() => {
                    modalOpen(false)
                }, 3000)
            } else {
                setModalMessage(
                    `Проверьте правильность введенных данных и активацию аккаунта!`
                );
                modalOpen(true)
                setTimeout(() => {
                    modalOpen(false)
                }, 3000)
            }
            return false
        })
}
 
export const resetPoint = `${baseApi}/accounts/reset_password/`
export function resetPost(email, setModalMessage, setModalOpen, navigate) {
    const data = new FormData();
 
    data.append('email', email)
 
    axios.post(resetPoint, data)
        .then((response) => {
            console.log(response)
            setModalMessage(
                `Сообщение с проверочным кодом было отправлено на ${email}`
            );
            setModalOpen(true);
 
            setTimeout(() => {
                navigate('/recovery')
            }, 2000)
        })
        .catch((error) => {
            alert(error.response.data)
        })
}
 
export const resetCompletePoint = `${baseApi}/accounts/reset_password_complete/`
export function resetCompletePost(activationCode, password, setModalMessage, setModalOpen, navigate) {
    const data = new FormData();
 
    data.append('activation_code', activationCode)
    data.append('password', password)
    data.append('password_confirm', password)
 
 
    axios.post(resetCompletePoint, data)
        .then((response) => {
            //alert("Пароль восстановлен!")
            setModalMessage(
                `Вы успешно обновили свой пароль`
            );
            setModalOpen(true);
 
            setTimeout(() => {
                navigate('/login')
            }, 2000)
            console.log(response)
        })
        .catch((error) => {
            alert(error)
        })
}
 
 
export const putProfilePoint = `${baseApi}/accounts/profile/`
export function putProfile(name, phone, token, setModalOpen, setModalMessage) {
    const data = new FormData();
 
    data.append('name', name)
    data.append('phone', phone)
    localStorage.setItem('userName', name)
    localStorage.setItem('userPhone', phone)
 
    axios.put(putProfilePoint, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        }})
        .then((response) => {
            // alert("Данные изменены!")
            console.log(response)
            setModalMessage(
                `Данные изменены!`
            );
            setModalOpen(true)
            setTimeout(() => {
                setModalOpen(false)
                window.location.reload()
            }, 2000)
        })
        .catch((error) => {
            alert(error)
        })
}
 
export const userProfilePoint = `${baseApi}/accounts/profile/`
export function userProfile(token) {
    return  axios.get(userProfilePoint, {
        headers: {
            Authorization: `Bearer ${token}`,
        }})
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            alert(error)
        })
}
 
 
export const getTendersPoint = `${baseApi}/tenders/`
 
export function getTenders() {
    return axios.get(getTendersPoint)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
            throw error
        })
 
}
 
 
export const sendProductPost = `${baseApi}/products/create_product/`
export const sendTenderPost = `${baseApi}/tenders/create_tender/`
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
