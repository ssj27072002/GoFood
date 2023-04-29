const express = require('express');
const cors = require('cors');
const mongoDB = require('./db');

const app = express();
const port = 5000;

// Allow CORS for all routes
app.use(cors());

// Specify allowed origins
app.use(cors({
  origin: ['http://localhost:3000', 'https://example.com'],
}));

// Set headers for CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Parse incoming JSON requests
app.use(express.json());

// Routes
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
mongoDB().then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}).catch((error) => {
  console.log(`Error starting server: ${error}`);
});







// const express =require('express')
// const cors = require('cors');
// const app = express()
// const port = 5000
// const mongoDB =require("./db");

// app.use(cors());
// app.use(cors({
//     origin: ['http://localhost:3000', 'https://example.com'],
// }));
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// })

// app.use(express.json())
// app.use('/api',require("./Routes/CreateUser"));
// app.use('/api',require("./Routes/DisplayData"));
// app.use('/api',require("./Routes/OrderData"));
// app.get('/',(req,res)=>{
//     res.send('hello')
// })
// app.listen(port, ()=>{
//     console.log(`hi ${port}`)
// })

// mongoDB()
