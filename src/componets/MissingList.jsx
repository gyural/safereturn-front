import React from 'react';
import styled from 'styled-components';

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
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
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

function MissingList() {
  return (
    <CardList>
      <CardContainer>
        <CardImg src={`${process.env.PUBLIC_URL}/dummy/miss_thumbnail3.png`} alt="Card" />
        <CardBody>
          <CardTitle>이름 : 아무개(60세)</CardTitle> <Tag>치매</Tag>
          <CardText><CardInfo>위치 : </CardInfo>3km 이내 추정</CardText>
          <CardText><CardInfo>체형 : </CardInfo>170cm 69kg</CardText>
          <CardText><CardInfo>의상 : </CardInfo>빨간색 와이셔츠, 청바지청바지청바지청바지청바지v</CardText>
          
          <CardText>
            <TextBodySecondary>Last updated 3 mins ago</TextBodySecondary>
          </CardText>
        </CardBody>
      </CardContainer>

      <CardContainer>
        <CardImg src={`${process.env.PUBLIC_URL}/dummy/miss_thumbnail1.png`} alt="Card" />
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <TextBodySecondary>Last updated 3 mins ago</TextBodySecondary>
          </CardText>
        </CardBody>
      </CardContainer>

      <CardContainer>
        <CardImg src={`${process.env.PUBLIC_URL}/dummy/miss_thumbnail1.png`} alt="Card" />
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <TextBodySecondary>Last updated 3 mins ago</TextBodySecondary>
          </CardText>
        </CardBody>
      </CardContainer>

      <CardContainer>
        <CardImg src={`${process.env.PUBLIC_URL}/dummy/miss_thumbnail2.png`} alt="Card" />
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <TextBodySecondary>Last updated 3 mins ago</TextBodySecondary>
          </CardText>
        </CardBody>
      </CardContainer>

      {/* 추가적인 CardContainer들도 동일하게 추가 */}
    </CardList>
  );
}

export default MissingList;