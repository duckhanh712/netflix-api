import express, { Router } from 'express';

import {  getCategory, createCategory , getCategoryById, updateCategory} from '../controller/categoryController'

const router: Router = express.Router();

router.get('/categories' , getCategory)

router.post('/createcategory' , createCategory)

router.get('/categories/:categoryId', getCategoryById)

router.patch('/categories/:categoryId', updateCategory)


export default router;