import app from './app.js'

const PORT = process.env.PORT || 3000

//escutar porta
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})
