import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { signUpHandler } from '../handlers/signUpHandler';

const app = express();

app.use(cors({origin: ["http://localhost:3000", "https://osogovorun.vercel.app/", "https://osogovo.run"]})); // Allow CORS from specific origins
app.use(express.json()); 

app.get("/test-cors-get", function (req, res) {
  res.status(200).json({ success: true });
});

app.post("/test-cors-post", function (req, res) {
  res.status(200).json({ success: true });
});

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Osogovo Run API');
});

app.post('/register', signUpHandler.post);

// Start the server
app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT || 4000}`);
});
