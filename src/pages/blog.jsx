import React from 'react'
import PageHeader from '../component/PageHeader/PageHeader'
import Blog from '../component/blog/BlogPosts'

const blog = () => {
  return (
    <>
    <PageHeader title="Blog Standard" breadcrumb="Blog" />
    <Blog/>
    </>
  )
}

export default blog