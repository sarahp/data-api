import express from 'express';
import companyRoutes from './routes/companyRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

const app = express();


app.use(cors())
app.use(express.json());

app.use('/api/companies', companyRoutes);
app.use('/api/users', userRoutes);

export default app;
