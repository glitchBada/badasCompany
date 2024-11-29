// import React, { useState } from 'react';
// import axios from 'axios';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import './OrderModal.scss'

//   const handleChange = (e) => {
//     setOrderData({
//       ...orderData,
//       [e.target.name]: e.target.value
//     });
//   };

  
//   // Обработка изменения номера телефона
//   const handlePhoneChange = (phone, countryData) => {
//     setOrderData({
//       ...orderData,
//       phone
//     });

//     if (countryData && countryData.dialCode && countryData.format) {
//       // Убедитесь, что countryData.format существует
//       const phoneLength = phone.replace(/\D/g, '').length; // Убираем все нецифровые символы
//       const minLength = countryData.dialCode.length + (countryData.format.match(/\d/g)?.length || 0); // Безопасная проверка format
  
//       setPhoneValid(phoneLength === minLength);
//     } else {
//       setPhoneValid(false); // Номер некорректный
//     }
//   };  

//   const handleSubmit = (e) => {
//     e.preventDefault();

//       // Дополнительная проверка перед отправкой формы
//       if (!phoneValid) {
//         alert('Введите корректный номер телефона');
//         return;
//       }
  
//       // Логика отправки данных в Telegram и на почту
//       console.log(orderData);
//       // Дальнейшая логика для отправки данных

//     axios.post('http://localhost:8000/api/order/', {
//       ...orderData,
//       service_id: service.id
//     })
//       .then(response => {
//         alert('Заказ успешно оформлен!');
//         closeModal();  // Закрываем модальное окно после отправки заказа
//       })
//       .catch(error => {
//         console.error(error);
//       });
//     };
//     const OrderModal = ({ service, closeModal }) => {
//       const [orderData, setOrderData] = useState({
//         full_name: '',
//         email: '',
//         phone: '',
//         technical_task: ''
//       });
//       const [phoneValid, setPhoneValid] = useState(true);
    
//       const phoneNumber = parsePhoneNumberFromString(phone); // Используем libphonenumber-js
    
//         if (phoneNumber && phoneNumber.isValid()) {
//           setPhoneValid(true); // Если номер валидный
//         } else {
//           setPhoneValid(false); // Если номер не валидный
//         }
      
//   return (
//     <div className='headModal'>
//       <div className="modal">
//         <div className="modal-content">
//           <h3>Оформить заказ на {service.title}</h3>
//           <form onSubmit={handleSubmit}>
//             <div className='usersContacts'>
//               <input
//                 type="text"
//                 name="full_name"
//                 placeholder="ФИО"
//                 value={orderData.full_name}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={orderData.email}
//                 onChange={handleChange}
//               />
//               {/* <input
//                 type="text"
//                 name="phone"
//                 placeholder="Номер телефона"
//                 value={orderData.phone}
//                 onChange={handleChange}
//                 required
//               /> */}
//               {/* Компонент PhoneInput для выбора страны и номера телефона */}
//           <PhoneInput
//           className="phoneinp"
//             country={'kg'} // начальная страна по умолчанию
//             value={orderData.phone}
//             onChange={handlePhoneChange} 
//           />{!phoneValid && <p style={{ color: 'red' }}>Некорректный номер телефона</p>}

//             </div>
//             <div className='technicalTask'>
//               <textarea
//                 name="technical_task"color='#FFC812'
//                 placeholder="Техническое задание"
                
//                 value={orderData.technical_task}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//             </div>
//             <button type="submit">Отправить заказ</button>
//           </form>
//           <button onClick={closeModal}>Закрыть</button>
//         </div>
//       </div>
//     </div>
//   );
//     };
// export default OrderModal;




// import React, { useState } from 'react';
// import axios from 'axios';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import './OrderModal.scss';
// import { parsePhoneNumberFromString } from 'libphonenumber-js';

// const OrderModal = ({ service, closeModal }) => {
//   const [orderData, setOrderData] = useState({
//     full_name: '',
//     email: '',
//     phone: '',
//     technical_task: ''
//   });

//   const [phoneValid, setPhoneValid] = useState(true);

//   // Обработка изменения номера телефона
//   const handlePhoneChange = (phone) => {
//     setOrderData({
//       ...orderData,
//       phone
//     });

//     // Проверяем валидность номера с использованием libphonenumber-js
//     const phoneNumber = parsePhoneNumberFromString(`+${phone}`); // Добавляем "+" для корректного анализа
//     if (phoneNumber && phoneNumber.isValid()) {
//       setPhoneValid(true);
//     } else {
//       setPhoneValid(false);
//     }
//   };

//   // Обработка изменений других полей формы
//   const handleChange = (e) => {
//     setOrderData({
//       ...orderData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Обработка отправки формы
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!phoneValid) {
//       alert('Введите корректный номер телефона');
//       return;
//     }

//     axios.post('http://localhost:8000/api/order/', {
//       ...orderData,
//       service_id: service.id
//     })
//       .then(response => {
//         alert('Заказ успешно оформлен!');
//         closeModal();  // Закрываем модальное окно после отправки заказа
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className='headModal'>
//       <div className="modal">
//         <div className="modal-content">
//           <h3>Оформить заказ на {service.title}</h3>
//           <form onSubmit={handleSubmit}>
//             <div className='usersContacts'>
//               <input
//                 type="text"
//                 name="full_name"
//                 placeholder="ФИО"
//                 value={orderData.full_name}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={orderData.email}
//                 onChange={handleChange}
//               />

//               {/* Компонент PhoneInput для выбора страны и номера телефона */}
//               <PhoneInput
//                 className="phoneinp"
//                 country={'kg'}  // начальная страна по умолчанию
//                 value={orderData.phone}
//                 onChange={handlePhoneChange}
//               />
//               {!phoneValid && <p style={{ color: 'red' }}>Некорректный номер телефона</p>}
//             </div>
//             <div className='technicalTask'>
//               <textarea
//                 name="technical_task"
//                 placeholder="Техническое задание"
//                 value={orderData.technical_task}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//             </div>
//             <button type="submit">Отправить заказ</button>
//           </form>
//           <button onClick={closeModal}>Закрыть</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderModal;



import React, { useState } from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './OrderModal.scss';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const OrderModal = ({ service, closeModal }) => {
  const [orderData, setOrderData] = useState({
    full_name: '',
    email: '',
    phone: '',
    technical_task: '',
    // service_name: ''
  });

  const [phoneValid, setPhoneValid] = useState(true);

  // Обработка изменений полей формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData(prevData => ({ ...prevData, [name]: value }));
  };

  // Обработка изменений номера телефона с валидацией
  const handlePhoneChange = (phone) => {
    setOrderData(prevData => ({ ...prevData, phone }));
    const phoneNumber = parsePhoneNumberFromString(`+${phone}`);
    setPhoneValid(phoneNumber ? phoneNumber.isValid() : false);
  };

  // Обработка отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phoneValid) {
      alert('Введите корректный номер телефона');
      return;
    }

    try {
      await axios.post('http://localhost:8000/api/order/', {
        ...orderData,
        service_id: service.id,  // Добавляем ID выбранной услуги для backend
        service_name: service.title      // Название выбранной услуги
      });
      alert('Заказ успешно оформлен!');
      closeModal();
    } catch (error) {
      console.error('Ошибка при отправке заказа:', error);
      alert('Произошла ошибка. Попробуйте еще раз.');
    }
  };

  return (
    <div className="headModal">
      <div className="modal">
        <div className="modal-content">
          <h3>Оформить заказ на {service.title}</h3>
          <form onSubmit={handleSubmit}>
            <div className="usersContacts">
              <input
                type="text"
                name="full_name"
                placeholder="ФИО"
                value={orderData.full_name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={orderData.email}
                onChange={handleChange}
                required
              />
              <PhoneInput
                className="phoneinp"
                country="kg"  // начальная страна по умолчанию
                value={orderData.phone}
                onChange={handlePhoneChange}
                required
              />
              {!phoneValid && <p style={{ color: 'red' }}>Некорректный номер телефона</p>}
            </div>
            <div className="technicalTask">
              <textarea
                name="technical_task"
                placeholder="Техническое задание"
                value={orderData.technical_task}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Отправить заказ</button>
          </form>
          <button className='closeButton' onClick={closeModal}><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 -0.5 25 25" fill="none">
<path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="red"/>
</svg> Закрыть</button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
