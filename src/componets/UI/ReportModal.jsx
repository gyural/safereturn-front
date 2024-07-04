import React from 'react'
import Modal from 'react-modal';
import styled from 'styled-components';

const ModalContent = styled.div`
  width: 50%;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;

const CloseButton = styled.button`
  background: #ff5a5f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 8px;
  cursor: pointer;
`;

function ReportModal({ isOpen, onRequestClose, selectedCard }) {
  if (!selectedCard) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <ModalContent>
        <h2>{selectedCard.name} ({selectedCard.age}세)</h2>
        <p><strong>위치:</strong> {selectedCard.place}</p>
        <p><strong>체형:</strong> {selectedCard.body}</p>
        <p><strong>의상:</strong> {selectedCard.wearing}</p>
        <CloseButton onClick={onRequestClose}>닫기</CloseButton>
      </ModalContent>
    </Modal>
  );
}

export default ReportModal