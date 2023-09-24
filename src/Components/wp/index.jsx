import React from 'react';
import './styles.css'

const WhatsAppButton = () => {
  const phoneNumber = '573017895662'; // Reemplaza con tu número de teléfono de WhatsApp

    return (
        
    <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="whatsapp-button"
    >
        Contactanos por WhatsApp
    </a>
    );
};

export default WhatsAppButton;
