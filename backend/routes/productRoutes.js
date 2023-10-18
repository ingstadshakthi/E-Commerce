import express from 'express';
const router = express.Router();
import { getAllProducts, getProduct } from '../controllers/productControllers.js';

router
    .get('/', getAllProducts)
    .get('/:id', getProduct);

export default router;
