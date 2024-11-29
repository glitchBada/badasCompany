import React, { useEffect, useState } from 'react';
import './Catalog.scss'
import OrderModal from './OrderModal';

const Catalog = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null); // Хранит выбранную услугу для модального окна
  const [isModalOpen, setIsModalOpen] = useState(false); // Управление состоянием модального окна

  useEffect(() => {
    fetch('http://localhost:8000/services/')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Ошибка:', error));
  }, []);

  const openModal = (service) => {
    setSelectedService(service); // Устанавливаем выбранную услугу
    setIsModalOpen(true); // Открываем модальное окно
  };

  const closeModal = () => {
    setIsModalOpen(false); // Закрываем модальное окно
    setSelectedService(null); // Сбрасываем выбранную услугу
  };


  return (
    <div className="catalog">
      <h1>Каталог IT услуг:</h1>
      <ul>
        {services.length > 0 ? (
          services.map(service => (
            <li className="oneService" key={service.id}>
              <div className='description'>
                <h3>{service.title}</h3>
            
                <p className='descriptionIn'>{service.description}</p>
                <p className='price'>Цена от: <span>{service.price} сом</span></p>
                {/* <p className='category'>Категории: <span>{service.category}</span></p> */}
              </div>
              <button onClick={() => openModal(service)}>Оформить заказ</button>
              
            </li>
          ))
        ) : (
          <p>Нет доступных услуг.</p>
        )}
      </ul>

{isModalOpen && selectedService && (
        <OrderModal 
          service={selectedService} 
          closeModal={closeModal} 
        />
      )}
    </div>
  );
};

export default Catalog;
