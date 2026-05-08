import express from 'express';
import connectDB from './lib/mongoose.ts';

const app = express();
const port = 8080;

// Middleware to parse JSON bodies
app.use(express.json());

// connect to MongoDB
connectDB();

// Root Endpoint
app.get('/', (req : express.Request, res : express.Response) => {
  res.send('Welcome to the Simple Chat App Backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});