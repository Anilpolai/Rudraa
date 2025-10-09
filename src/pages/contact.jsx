import React from 'react'
import PageHeader from '../component/PageHeader/PageHeader'
import Location from '../component/contact/location'
import  Massage from  '../component/contact/massage'

const contact = () => {
  return (
    <>
        <PageHeader title="Special Food" breadcrumb="Contact Us " />  
        <Location/>
        <Massage/>
    </>
  )
}

export default contact