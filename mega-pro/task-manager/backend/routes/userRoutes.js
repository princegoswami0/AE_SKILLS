const express = require('express');
const { adminOnly, protect } = require('../middlewares/authMiddleware');

const router = express.Router();

//User Routes
router.get("/",protect,adminOnly,getUsers);// Get all users (admin only) 
router.get("/:id",protect, getUserById);// Get user by ID
router.delete("/:id", protect, adminOnly, deleteUser); // Delete user (admin only)

module.exports = router;