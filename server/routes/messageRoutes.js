import express from 'express';
import { protectRoute } from '../middleware/Auth.js';
import { getMessages, getUserForSidebar, markMessageSeen, sendMessage } from '../controllers/messageController.js';

const messageRouter = express.Router();

messageRouter.get('/users',protectRoute, getUserForSidebar);
messageRouter.get('/:id',protectRoute, getMessages);
messageRouter.put('/mark/:id',protectRoute, markMessageSeen);
messageRouter.post('/send/:id', protectRoute, sendMessage);

export default messageRouter;