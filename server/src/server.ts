import cors from 'cors';
import path from 'path';
import express from 'express';
import { errors } from 'celebrate';

import routes from './routes/index';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

import { PORT } from './config/constants';
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
