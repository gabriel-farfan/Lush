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
    const { blogTitle, text, images } = req.body;
    console.log(req.body);
    try {
      const blog = await new Blog({
        blogTitle,
        text,
        images,
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Oh Snap! An error has occured, please try again",
      });
    }
  },
  // fetchBlog: async (req, res) => {
  //     const id = req.params.id;

  //     let plant, error = null;
  //     try {
  //         plant = await Plant.findOne({ _id: id });
  //     } catch (error) {
  //         console.error(error);
  //     }
  //     res.json({
  //         content: error ? error : { plant },
  //         success: error ? false : true
  //     });
  // },
  // savePlant: async (req, res) => {
  //     if (req.ser.admin) {
  //         let savedPlant, error = null;
  //         const plant = req.body;
  //         try {
  //             savedPlant = await new Plant(plant).save();
  //         } catch (error) {
  //             console.error(error);
  //         }
  //         res.json({
  //             content: error ? error : { plant: savedPlant },
  //             success: error ? false : true
  //         });
  //     } else {
  //         res.json({
  //             content: 'You are not an admin',
  //             success: false
  //         });
  //     }
  // },
  // editBlog: async (req, res) => {
  //     if (req.ser.admin) {
  //         const id = req.params.id;
  //         const newPlant = req.body;
  //         let oldPlant, error = null;
  //         try {
  //             oldPlant = await Plant.findOneAndUpdate({ _id: id }, newPlant);
  //         } catch (error) {
  //             console.error(error);
  //         }
  //         res.json({
  //             content: error ? error : { plant: oldPlant },
  //             success: error ? false : true
  //         });
  //     } else {
  //         res.json({
  //             content: 'You are not an admin',
  //             success: false
  //         });
  //     }
  // },
  // deletePlant: async (req, res) => {
  //     if (req.ser.admin) {
  //         const id = req.params.id;
  //         let deletedPlant, error = null;
  //         try {
  //             deletedPlant = await Plant.findOneAndDelete({ _id: id });
  //         } catch (error) {
  //             console.error(error);
  //         }
  //         res.json({
  //             content: error ? error : { plant: deletedPlant },
  //             success: error ? false : true
  //         });
  //     } else {
  //         res.json({
  //             content: 'You are not an admin',
  //             success: false
  //         });
  //     }
  // },
};

module.exports = blogController;
