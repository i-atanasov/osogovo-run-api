import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { signUpHandler } from './signUpHandler';

const app = express();

app.use(cors({origin: true})); // Enable CORS for all origins
app.use(express.json()); // Middleware to parse JSON bodies
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN);
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");  
    res.header("Access-Control-Allow-Credentials", "true");

  next();
});

app.post('/register', signUpHandler.post);

// Start the server
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT || 4000}`);
});
