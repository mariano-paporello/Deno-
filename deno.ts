import express, {Express, Request, Response} from "npm:express"

const app : Express = express()

app.get("/", (req: Request, res:Response)=>{
    res.send("HOLA DESDE MAIN PAGE")
})

app.post("/", (req: Request, res:Response)=>{
    res.send("HOLA DESDE POST A MAIN PAGE")
})

app.listen(8000)
console.log(`Server up in ${8000}`)
