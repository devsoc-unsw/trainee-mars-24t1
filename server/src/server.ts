// src/server.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import echoRouter from './routes/echo';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // Add this line to enable JSON parsing in the request body
app.use(cors());

// Include the echo API
app.use('/echo', echoRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
