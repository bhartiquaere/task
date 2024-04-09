import React from 'react'

import { Card1, Card2, Card3, Card4, Card5 } from '../cards/Cards';
import DealsData from '../sidebar/DealsData';
const MainComponent = ({...props}) => {
  return (
   <>
     <main className={`page-wrapper`}  >
        <div className={`content container-fluid`} >
          <DealsData
            heading="Deals Dashboard"
          />
          <div className={`row`}>
            <Card1/>
            <Card2 />
            <Card3  />
            <Card4  />
            <Card5  />
          </div>

        </div>
      </main>
   </>
  )
}

export default MainComponent;