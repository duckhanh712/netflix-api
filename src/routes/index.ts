import express, {} from 'express'
import userRouter from './users'
import categoryRouter from './categories'

const app = express();

export default () => {
  console.log('=====');
  
  app.use('/api/v1', userRouter)

  app.use('/api/v2', categoryRouter)


}

