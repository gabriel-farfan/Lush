import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import blogActions from '../../redux/actions/blogActions'
import './blogComponent.css'

function BlogComponent() {

    const dispatch = useDispatch()
    const blogs = useSelector(state => state.blogReducers.blogs)
    
    useEffect(() => {

    dispatch(blogActions.fetchBlogs())
    
    
    
}, [])

console.log("🚀 ~ file: BlogComponent.jsx ~ line 13 ~ BlogComponent ~ blogs", blogs)

  return (
    
    <div className="blogWrapper">
        <div>
            <div >
                <h2 className="h2HomeBlog">OUR NEWS</h2>
                    {blogs?.map(blog => (
                
                        <div className="blogComponentWrapper" key={blog._id}>
                            <h3 className="h3BlogComponent">{blog.blogTitle}</h3>
                        <div className="divImgBlog">
                            <img className="imgBlog" src={process.env.PUBLIC_URL+ `/img/blog/${blog.images}`} alt={blog.blogTitle} />
                        </div>
                    
                            <p className="pBlogComponent">{blog.text}</p>
                                
                        </div>
                            
                    
                
                    ))}
            </div>

        </div>

    </div>
  )
}

export default BlogComponent