import React from 'react'
import ImageSlide from '../UI/ImageSlide'
import styled from 'styled-components'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';


const Container = styled.div`
  box-sizing: border-box;
  padding: 8px 28px;
  h1 {
    /* CSS properties for h1 element */
    color: #575757;
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: bold;
    margin-top: 30px;
  }

  h2 {
    color: #333;
    font-size: 1.3rem;
    margin-bottom: 10px;
    font-weight: bold;
  }
`
const Icon = styled.div`
  width: 32px;
  height: 32px;
  background-image: url('/reportIcon.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 10px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px; /* Adjust the height as needed */
  background-color: #ccc; /* Line color */
  margin: 4px 0; /* Margin top and bottom */
`;
function MissingDetail({selectedCard, handleReportClick}) {
  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{height:'37px', flexGrow:'1'}}>{selectedCard.name} ({selectedCard.age}세)</h1>
        <Icon />
        <Button onClick={handleReportClick}variant="danger">신고하기</Button>
      </div>
      <ImageSlide></ImageSlide>
      <h1>정보</h1>
      <Line></Line>
      <Table striped bordered hover>
      
        <tbody>
          <tr>
            <td>나이</td>
            <td>53세</td>
          </tr>
          <tr>
            <td>피지컬</td>
            <td>{selectedCard.body}</td>
          </tr>
          <tr>
            <td>옷</td>
            <td>{selectedCard.wearing}</td>
          </tr>
          <tr>
            <td>실종 장소</td>
            <td>{selectedCard.place}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default MissingDetail