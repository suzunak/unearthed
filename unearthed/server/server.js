import express from 'express'

const app = express();

// express.static -> built-in middleware function in express
app.use('/public', express.static('./public')) //files from client/public
app.use('/scripts', express.static('./public/scripts')) // files from client/public/scripts

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
});
