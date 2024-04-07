import express, { Request, Response } from 'express';
import cors from 'cors';
import echoRouter from './routes/echo';
import connectDB from './mongodb/connect';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Include the echo API
app.use('/echo', echoRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

const startServer = async () => {
    try {
        const mongodbUrl = process.env.MONGODB_URL || '';
        connectDB(mongodbUrl);

        const port = process.env.PORT || 5000;
        app.listen(port, () => console.log(`Server started on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

startServer();