import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';


const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 1;
  text-align: center;
  padding: 10px 0;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InnerContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  text-align: left;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 29px;
  font-weight: bold;
`;

const Icon = styled.div`
  width: 32px;
  height: 32px;
  background-image: url('/reportIcon.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 10px;
`;

function HeaderDetail({handleListMode}) {
  return (
    <HeaderContainer>
      <InnerContainer>
        <p>상세 정보</p>
        <CloseButton onClick={handleListMode}></CloseButton>
      </InnerContainer>
    </HeaderContainer>
  );
}

export default HeaderDetail;