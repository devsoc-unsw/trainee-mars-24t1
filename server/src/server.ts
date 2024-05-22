// src/server.js
import express, { Express, Request, Response } from "express";
import cors from "cors";
import echoRouter from './routes/echo';
import connectDB from './mongodb/connect';
import dotenv from "dotenv";
import promptRouter from './routes/prompt.route';
import answerRouter from './routes/answer.route';
import userRouter from './routes/user.route';

// Load environment variables from .env file
dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

// Include the echo API
app.use('/echo', echoRouter);
app.use('/prompt', promptRouter);
app.use('/answer', answerRouter);
app.use('/user', userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

const startServer = async () => {
    try {
        const mongodbUrl = process.env.MONGODB_URL || '';
        connectDB(mongodbUrl);

        const port = process.env.PORT || 5001;
        app.listen(port, () => console.log(`Server started on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

startServer();
