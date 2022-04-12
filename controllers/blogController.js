const Blog = require("../models/blog");

const blogController = {
  fetchBlogs: async (req, res) => {
    let blogs,
      error = null;
    try {
      blogs = await Blog.find(req.query);
    } catch (error) {
      console.error(error);
    }
    res.json({
      content: error ? error : { blogs },
      success: error ? false : true,
    });
  },
  postBlog: async (req, res) => {
    
       
          let savedBlog, error = null;
          const blog = req.body;
          try {
              savedBlog = await new Blog(blog).save();
          } catch (error) {
              console.error(error);
          }
          res.json({
              content: error ? error : { blog: savedBlog },
              success: error ? false : true}
          );
      }
    };

      module.exports = blogController;