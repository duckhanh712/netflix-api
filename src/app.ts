import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';

// console.log(DB_HOST,DB_NAME);


// configs
const port = process.env.PORT || 3003
const app = express();
const server = http.createServer(app);




// enable files upload


// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
import userRouter from './routes/users';
app.use('/api/v1',userRouter)

import categoryRouter from './routes/categories';
app.use('/api/v1',categoryRouter)



server.listen(port, () => {
    console.log('Server listening at port %d', port);
});

// handle uncaught exceptions
process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err);
    // process.exit(1) //mandatory (as per the Node.js docs)
}) 
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = process.env.DB_PORT 
export const DB_USER = process.env.DB_USER 
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_NAME = process.env.DB_NAME 