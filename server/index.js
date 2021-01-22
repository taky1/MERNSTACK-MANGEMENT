import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRouter from './route/Posts.js';
const app = express();

app.use('/Posts', postRouter);

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://takieddine:takieddine@cluster0.v5fgh.mongodb.net/Processus?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })

.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`) ))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);