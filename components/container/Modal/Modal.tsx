'use client';

import React, { useEffect, useState } from 'react';
import { ModalProps } from './Modal.types';

function Modal({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps): React.JSX.Element | null {
  const [showModal, setShowModal] = useState(false);
  const [modalClass, setModalClass] = useState('opacity-0 scale-95');

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => setModalClass('opacity-100 scale-100'), 100);
    } else {
      setModalClass('opacity-0 scale-95');
      setTimeout(() => setShowModal(false), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-11/12 max-w-md mx-auto p-6 transform transition-transform duration-500 ${modalClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <h2 className="text-xl text-dark font-semibold mb-4">{title}</h2>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
