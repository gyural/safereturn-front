import React, {useState} from 'react'
import MissingList from '../MissingList'
import styled from 'styled-components'
import Header from '../UI/Header'
import HeaderWithReport from '../UI/HeaderWithReport'
import ReportModal from '../UI/ReportModal'

const Container = styled.div`
  margin: 0 auto;
  max-width: 540px;
  overflow: hidden;
  padding-top: 60px;
`

const Content = styled.div`
  
`

function MissingListPage() {
  // States
  const [isReportMode, setIsReportMode] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleReportClick = () => {
    setIsReportMode(prevMode => !prevMode);
    setSelectedCard(null)
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <>
      {isReportMode ? (
        <HeaderWithReport />
      ) : (
        <Header handleReportClick={handleReportClick}/>
      )}
      <Container>
        <Content>
          <MissingList setSelectedCard={setSelectedCard} selectedCard={selectedCard}></MissingList>
        </Content>
        

      </Container>
      {isReportMode && (
          <ReportModal 
            isOpen={selectedCard !== null} 
            onRequestClose={closeModal} 
            selectedCard={selectedCard} 
          />
        )}
    </>
  )
}

export default MissingListPage