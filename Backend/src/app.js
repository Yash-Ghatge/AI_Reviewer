import express from 'express'
import router from './routes/ai.route.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("API IS RUNNING")
})
app.use('/ai',router)
export default app