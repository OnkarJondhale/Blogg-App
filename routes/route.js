import express from 'express'
import addUser from '../controllers/addUser.js'
import addPost from '../controllers/addPost.js'
import addComment from '../controllers/addComment.js'

const router = express.Router();

router.put('/addUser',addUser);
router.put('/addpost',addPost);
router.put('/addComment',addComment);

export default router;
