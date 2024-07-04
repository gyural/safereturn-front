import React, {useState} from 'react'
import MissingList from '../contents/MissingList'
import styled from 'styled-components'
import Header from '../UI/Header'
import HeaderWithReport from '../UI/HeaderWithReport'
import ReportModal from '../UI/ReportModal'
import MissingDetail from '../contents/MissingDetail'
import HeaderDetail from '../UI/HeaderDetail'
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
  const [isDetailMode, setIsDetailMode] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null);
  const [reportModal, setReportModal] = useState(false)

  const handleReportClick = () => {
    if(isDetailMode){
      console.log('first')
      setReportModal(true)
    }else{
      setIsReportMode(prevMode => !prevMode);
      setSelectedCard(null)
    }
  };
  
  const handleCardClick = (card) =>{
    setSelectedCard(card)
    if(isReportMode){
      setReportModal(true)
    }else{
      setIsDetailMode(true)
      
    }
  }
  const closeModal = () => {
    setSelectedCard(null);
  };

  const handleListMode = ()=>{
    if(isDetailMode){
      setIsDetailMode(false)
    }else{
      setIsReportMode(false)
    }
    setSelectedCard(null)
    setReportModal(false)
    
  }
  return (
    <>
      {isReportMode ? (
        <HeaderWithReport handleListMode={handleListMode}/>
      ) : isDetailMode ? (
        <HeaderDetail handleReportClick={handleReportClick} handleListMode={handleListMode}/>
      ) : (
        <Header handleReportClick={handleReportClick} />
      )}
      <Container>
        <Content>
          {isDetailMode? (
            <MissingDetail handleReportClick={handleReportClick} selectedCard={selectedCard} />
          ):(
            <MissingList handleCardClick={handleCardClick} selectedCard={selectedCard}></MissingList>
          )}
        </Content>
        

      </Container>
      {(isReportMode || isDetailMode) && (
          <ReportModal 
            isOpen={reportModal} 
            onRequestClose={closeModal} 
            selectedCard={selectedCard} 
          />
        )}
    </>
  )
}

export default MissingListPage