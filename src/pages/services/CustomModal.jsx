import React from 'react';
import './CustomModal.css';

function CustomModal({ show, onClose, title, content, images }) {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{title}</h2>
                <div className="modal-body">
                    {content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    <div className="modal-images">
                        {images.map((image, index) => (
                            <img key={index} src={image.src} alt={image.alt} className="modal-image" />
                        ))}
                    </div>
                </div>
                <button className="close-button" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

export default CustomModal;