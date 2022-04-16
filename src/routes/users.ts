import express, { Router } from 'express';

import {  getUser, createUser , getUserById, updateUser} from '../controller/userController'

const router: Router = express.Router();

router.get('/users' , getUser)

router.post('/register' , createUser)

router.get('/users/:userId', getUserById)

router.patch('/users/:userId', updateUser)


export default router;