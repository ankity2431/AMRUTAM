import React from 'react'
import Header from './Header'
import FaqSearchBar from './FaqSearchBar'
import FaqTabs from './FaqTabs'
import AmrutamAppSection from './AmrutamAppSection'
import FaqFooter from './FaqFooter'

const FaqLayout = () => {
  return (
    <div>
      <Header />
      <FaqSearchBar />
      <FaqTabs />
      <AmrutamAppSection  />
      <FaqFooter />
    </div>
  )
}

export default FaqLayout
