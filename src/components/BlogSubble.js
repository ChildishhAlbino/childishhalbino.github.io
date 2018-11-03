import React from 'react'

import './BlogSubble.scss'
import Subble from './subble'

const BlogSubble =  ({children}) => ( 
  <Subble stylingClass = "subble One shadow">
    <h1> Recent Posts</h1>
    {children}
  </Subble>
)

export default BlogSubble
