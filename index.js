const express = require("express")
const app = express()
app.use(express.json())
const port = 3000

const db = require("./db")

app.get("/aula", async (req, res) =>{
    // tentar  conectar o banco de dados.
    try{
        const resultado = await db.pool.query('SELECT * FROM aula')
        res.status(200).json(resultado[0])
    }catch (erro) {
        res.status(500).json({erro: erro.menssage})
    }
})

app.listen(port, ()=>{
    console.log("API rodano na porta" + port)
})