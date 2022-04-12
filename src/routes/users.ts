import express, { Router } from 'express';

import {  getUser, createUser } from '../controller/userController'

const router: Router = express.Router();

router.get('/users' ,getUser)

router.post('/register' ,createUser)


export default router;