import express from 'express';
import { addToCart, getCart, removeFromCart } from '../controllers/cartController.js';
import authMidleware from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post('/add', authMidleware, addToCart);
cartRouter.post('/remove', authMidleware, removeFromCart);
cartRouter.get('/get', authMidleware, getCart);

export default cartRouter;