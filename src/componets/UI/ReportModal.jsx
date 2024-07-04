import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const ModalContent = styled.div`
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
  font-size: 1.2rem; /* Increased font size */

  h1 {
    /* CSS properties for h1 element */
    color: #575757;
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: bold;
    /* margin-top: 30px; */
  }

  h2 {
    color: #333;
    font-size: 1.3rem;
    margin-bottom: 10px;
    font-weight: bold;
  }
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

const TextInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ModalImage = styled.img`
  width: 100%;
  max-width: 300px;
  margin: 14px auto;
`;

const Line = styled.div`
  width: 100%;
  height: 1px; /* Adjust the height as needed */
  background-color: #ccc; /* Line color */
  margin: 15px 0; /* Margin top and bottom */
`;

function ReportModal({ isOpen, onRequestClose, selectedCard }) {
  const [reporterName, setReporterName] = useState('');
  const [reporterContact, setReporterContact] = useState('');
  const [reportDescription, setReportDescription] = useState('');

  const handleReportSubmit = () => {
    // 여기서 신고 처리 로직을 구현할 수 있습니다.
    // 예를 들어, API 호출 등의 실제 신고 처리 코드를 추가합니다.
    console.log('Reporter Name:', reporterName);
    console.log('Reporter Contact:', reporterContact);
    console.log('Report Description:', reportDescription);

    // 신고 완료 후 모달 닫기
    onRequestClose();
  };

  if (!selectedCard) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <ModalContent>
        <h1>실종자 정보</h1>
        <Line></Line>
        
        <h2>{selectedCard.name} ({selectedCard.age}세)</h2>
        <ModalImage
          src={`${process.env.PUBLIC_URL}/dummy/miss_thumbnail${selectedCard.img}.png`}
          alt={`Missing person ${selectedCard.name}`}
        />
        <h2><strong>위치:</strong> {selectedCard.place}</h2>
        <h2><strong>체형:</strong> {selectedCard.body}</h2>
        <h2><strong>의상:</strong> {selectedCard.wearing}</h2>
        <Line></Line>
        
        <h1>신고자 정보</h1>
        <TextInput
          type="text"
          placeholder="이름을 입력해주세요..."
          value={reporterName}
          onChange={(e) => setReporterName(e.target.value)}
        />
        <TextInput
          type="text"
          placeholder="연락처를 입력해주세요..."
          value={reporterContact}
          onChange={(e) => setReporterContact(e.target.value)}
        />
        <TextArea
          rows="4"
          placeholder="신고 내용을 입력해주세요..."
          value={reportDescription}
          onChange={(e) => setReportDescription(e.target.value)}
        />
        <div style={{display:'flex', width: '90%', justifyContent: 'center', gap: '10px'}}>
          <CloseButton onClick={handleReportSubmit}>신고하기</CloseButton>
          <CloseButton onClick={onRequestClose}>취소</CloseButton>
        </div>
      </ModalContent>
    </Modal>
  );
}

export default ReportModal;