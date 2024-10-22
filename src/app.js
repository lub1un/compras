import express from 'express';
import connectDB from './config/db.js';
import produtoRouter from './routers/produto-router.js';


let result = connectDB();

console.log(result);

const app = express();
app.use(express.json());

app.use('/produtos', produtoRouter);

app.listen(3000, () => console.log('Server is running on port 3000'));
