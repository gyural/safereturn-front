import React, {useState} from 'react'
import MissingList from '../MissingList'
import styled from 'styled-components'
import Header from '../UI/Header'
import HeaderWithReport from '../UI/HeaderWithReport'


const Container = styled.div`
  margin: 0 auto;
  max-width: 540px;
  overflow: hidden;
  
`



const Content = styled.div`
  
`

function MissingListPage() {
  // States
  const [isReportMode, setIsReportMode] = useState(false);
  const handleReportClick = () => {
    setIsReportMode(prevMode => !prevMode);
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
          <MissingList></MissingList>
        </Content>
      </Container>
    </>
  )
}

export default MissingListPage