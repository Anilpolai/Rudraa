import React from 'react'
import PageHeader from '../component/PageHeader/PageHeader'
import Journey from '../component/about/Journey'
import Abouttop from '../component/about/abouttop'  

const about = () => {
  return (
    <>
    <PageHeader title="Special Food" breadcrumb="About Us " />  
    <Journey/>  
    <Abouttop/>  
    </>
  )
}

export default about