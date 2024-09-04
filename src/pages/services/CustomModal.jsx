import React from 'react';
import './CustomModal.css';
import { FaTimes } from 'react-icons/fa';
function CustomModal({ show, onClose, title, content, images }) {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-body">
                    <div className="modal-images">
                        {images.map((image, index) => (
                            <img key={index} src={image.src} alt={image.alt} className="modal-image" />
                        ))}
                    </div>
                    <div className="modal-text">
                        <h2>{title}</h2>
                        {content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
                <FaTimes className="close-icon" onClick={onClose} />
            </div>
        </div>
    );
}

export default CustomModal;
