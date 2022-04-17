import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import blogActions from '../../redux/actions/blogActions'
import './homeBlog.css'
import Grid from '@mui/material/Grid'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button } from '@mui/material';



function HomeBlog() {

    const dispatch = useDispatch()
    const blogs = useSelector(state => state.blogReducers.blogs)

    useEffect(() => {

        dispatch(blogActions.fetchBlogs())

    }, [])

    let blogPost = []
    blogPost.push(blogs[0])


    return (
        <div>
            <Box>
                {blogPost?.map(blog => {
                    return (
                        <Container>
                            <h2 className="h2HomeBlog">OUR BLOG</h2>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} >
                                    <Box className="home-blog-box">
                                        <h3 className="h3HomeBlog">{blog?.blogTitle}</h3>
                                        <p className="pHomeBlog">{blog?.text}</p>
                                        {/* <Button variant="outlined">READ MORE</Button> */}
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} >
                                    <img className="imgBlogComp" src={process.env.PUBLIC_URL + `/img/blog/${blog?.images}`} alt="plant" />
                                </Grid>
                            </Grid>
                        </Container>
                    )
                })}
            </Box>

        </div>
    )
}


export default HomeBlog
