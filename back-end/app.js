import express from "express"




const app = express()
const port = 9000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {res.status(200).send("hello js")})


app.listen(port, () => console.log(`Listenig on port: ${port}`))