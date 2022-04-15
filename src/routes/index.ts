import express, {} from 'express'
import userRouter from './users'

const app = express();

export default () => {
  console.log('=====');
  
  app.use('/api/v1',userRouter)


}

