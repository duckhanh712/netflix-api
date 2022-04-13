import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';


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

server.listen(port, () => {
    console.log('Server listening at port %d', port);
});

// handle uncaught exceptions
process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err);
    // process.exit(1) //mandatory (as per the Node.js docs)
}) 