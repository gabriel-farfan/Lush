import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import blogActions from "../../redux/actions/blogActions";

function Blog(props) {
  useEffect(() => {
    props.fetchBlogs();
  }, []);
  {
    console.log(props);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const blogData = {
      blogTitle: event.target[0].value,
      text: event.target[1].value,
      images: event.target[2].value,

      
    };
    {console.log(blogData)}
    props.blogData(blogData)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        
          <div class="">
            <input id="blogTitle" class="blogTitle" type="text" placeholder=" " />
            
            <label for="blogTitle" class="blogTitle">
            blogTitle
            </label>
          </div>
          <div class="">
            <input id="text" class="text" type="text" placeholder=" " />
            
            <label for="text" class="text">
            text
            </label>
          </div>

          <div class="">
            <input id="images" class="images" type="text" placeholder=" " />
            
            <label for="images" class="images">
            images
            </label>
          </div>

          <button type="text" class="submit">
            upload blog
          </button>
        
      </form>

      {console.log(props)}
      {props.blogs.map((data) => (
        <Box>
          <Container>
            <h2 className="h2HomeBlog">OUR BLOG</h2>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6}>
                <Box className="home-blog-box">
                  <h3 className="h3HomeBlog">{data.blogTitle}</h3>
                  <p className="pHomeBlog">{data.text}</p>
                  <Button variant="outlined">READ MORE</Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <img
                  src={process.env.PUBLIC_URL + `/img/blogs/${data.images}`}
                  alt="plant"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      ))}
    </div>
  );
}
const mapDispatchToProps = {
  fetchBlogs: blogActions.fetchBlogs,
  blogData:blogActions.blogData,
};
const mapStateToProps = (state) => {
  return {
    blogs: state.blogReducer.blogs,
    auxiliar: state.blogReducer.auxiliar,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
