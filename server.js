import express from 'express';
import db from './config/database.js'; 
import routes from './routes/route.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.use('/api', routes); 

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen((process.env.PORT || 4000), () => {
    console.log("Server created successfully on port", process.env.PORT || 4000);
});

db(); 
