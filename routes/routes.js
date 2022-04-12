const Router = require('express').Router();
const passport = require('../config/passport');

const blogController = require("../controllers/blogController");
const plantController = require('../controllers/plantController');
const userController = require('../controllers/userController');
const validator = require('../config/validator');

const {
    fetchPlants,
    fetchPlant,
    savePlant,
    editPlant,
    deletePlant,
} = plantController;

Router.route('/plants/:id')
    .get(fetchPlant)
    .put(passport.authenticate('jwt', { session: false }), editPlant)
    .delete(passport.authenticate('jwt', { session: false }), deletePlant);

Router.route('/plants')
    .get(fetchPlants)
    .post(passport.authenticate('jwt', { session: false }), savePlant);

const {
    signUp,
    signIn,
    signOut,
    verifyEmail,
    verifyToken
} = userController;


Router.route('/auth/signup').post(validator, signUp);

Router.route('/auth/signin')
    .get(passport.authenticate('jwt', { session: false }), verifyToken)
    .post(signIn);

Router.route('/auth/signout')
    .post(passport.authenticate('jwt', { session: false }), signOut);

Router.route('/verify/:uniqueString').get(verifyEmail);

const { postBlog, fetchBlogs } = blogController;

Router.route("/blog").get(fetchBlogs);

Router.route("/blog").post(postBlog);

module.exports = Router;