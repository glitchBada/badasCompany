//import React, { useEffect, useState } from 'react';
//import axios from 'axios';
//import './ServiceList.scss'
//
//
//const ServiceList = () => {
//  const [services, setServices] = useState([]);

//  useEffect(() => {
//    axios.get('http://localhost:8000/api/services/')
//      .then(response => setServices(response.data))
//      .catch(error => console.error(error));
//  }, []);

//  useEffect(() => {
//  axios.get('http://localhost:8000/api/services/')
//    .then(response => {
//      console.log(response.data);  // Добавь это для отладки
//      setServices(response.data);
//    })
//    .catch(error => console.error('Error fetching services:', error));
//}, []);


//useEffect(() => {
//  fetch('http://localhost:8000/api/services/')
//    .then(response => response.json())
//    .then(data => setServices(data))
//    .catch(error => console.error('Error fetching services:', error));
//}, []);


//  return (
//    <div className="catalog">
//      <h2>Каталог ИТ-услуг</h2>
//      <ul>
//        {services.map(service => (
//          <li key={service.id}>
//            {service.title} - {service.price} $
//            <button>Оформить заказ</button>
//          </li>
//        ))}
//      </ul>
//    </div>
//  );
//}
//
//export default ServiceList;



//вторая часть кода(правильная)

import React, { useEffect, useState } from 'react';

const Catalog = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/services/')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Ошибка:', error));
  }, []);

  return (
    <div>
      <h1>Catalog of Services</h1>
      <ul>
//        {services.map(service => (
//          <li key={service.id}>
//            <h2>{service.title}</h2>
//            <p>{service.description}</p>
//            <p>Price: {service.price}</p>
//            <p>Category: {service.category}</p>
//          </li>
//        ))}

        {services.length > 0 ? (
          services.map((service) => (
            <li key={service.id}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <p>Price: {service.price}</p>
            </li>
          ))
        ) : (
          <p>No services available.</p>
        )}

      </ul>
    </div>
  );
};

export default Catalog;
