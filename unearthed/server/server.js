import express from 'express';
import './config/dotenv.js';
import giftsRouter from './routes/gifts.js';

const app = express();

// express.static -> built-in middleware function in express
// first parameter: mount path (route prefix)
// bc of vite.config.js, files in client/public are bundled to /server/public (root dir of server)
app.use('/public', express.static('./public')) 

// bc of vite.config.js, files in client/public/scripts are bundled 
// to /server/public/scripts (root dir of server)
app.use('/scripts', express.static('./public/scripts')) 

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
});

app.use('/gifts', giftsRouter);