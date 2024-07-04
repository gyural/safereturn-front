import React, { useState } from 'react';
import styled from 'styled-components';
import missingList from '../missingList.json'

const CardList = styled.div`
  width: 100%;
  padding: 12px 8px;
  height: 680px; /* CardList의 높이를 고정하거나 필요에 따라 조정 */
  overflow-y: scroll; /* 내용이 넘칠 경우 수직 스크롤 표시 */
  background-color: #e4e6e4;
  box-sizing: border-box;

`;

const CardContainer = styled.div`
  width: 100%;
  height: 214px;
  padding: 19px 5px;
  margin: 0px auto 10px;
  box-sizing: border-box;
  border: 1px solid #D9D9D9;
  background-color: ${props => (props.selected ? '#818181' : '#fff')};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.selected ? '#818181' : '#a8a8a8')};
  }
`;

const CardImg = styled.img`
  width: 40%;
  height: auto;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  margin-right: 1rem; /* 이미지 오른쪽 여백 추가 */
`;

const CardBody = styled.div`
  flex: 1;
  padding: 1%;
  position: relative;
`;

const CardTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.9rem;
`;

const CardInfo = styled.strong`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #000;
`
const CardText = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 0.1rem;
`;

const TextBodySecondary = styled.small`
  font-size: 0.8rem;
  color: #777;
  position: absolute;
  bottom: 0;
  right: 8px;
`;

const Tag = styled.div`
  width: 20%;
  background-color: #FFC107;
  color: #fff;
  font-size: 1.0rem;
  text-align: center;
  padding: 6px 2px;
  border-radius: 8px;
  position: absolute;
  top: 0; right: 8px;
  font-weight: bold;
`

function MissingList({setSelectedCard, selectedCard}) {
  

  const handleCardClick = (index) => {
    setSelectedCard(missingList[index]);
  };

  return (
    <>
      <CardList>
        {missingList.map((missing, index) => (
          <CardContainer
            key={index}
            selected={selectedCard && selectedCard === missing}
            onClick={() => handleCardClick(index)}
          >
            <CardImg src={`${process.env.PUBLIC_URL}/dummy/miss_thumbnail3.png`} alt="Card" />
            <CardBody>
              <CardTitle>{missing.name} ({missing.age}세)</CardTitle>
              <Tag>치매</Tag>
              <CardText><CardInfo>위치 : </CardInfo>{missing.place}</CardText>
              <CardText><CardInfo>체형 : </CardInfo>{missing.body}</CardText>
              <CardText><CardInfo>의상 : </CardInfo>{missing.wearing}</CardText>
              <CardText>
                <TextBodySecondary>Last updated 3 mins ago</TextBodySecondary>
              </CardText>
            </CardBody>
          </CardContainer>
        ))}
      </CardList>
     
    </>
  );
}

export default MissingList;