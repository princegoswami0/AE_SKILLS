const express = require('express');
const { adminOnly, protect } = require('../middlewares/authMiddleware');

const router = express.Router();

//User Routes
router.get("/",protect,adminOnly,getUsers);// Get all users (admin only)


