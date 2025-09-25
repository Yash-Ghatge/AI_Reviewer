import express from 'express'
import router from './routes/ai.route.js'
import cors from 'cors'

const app = express()
const allowedOrigins = ['http://localhost:5173','https://ai-reviewer-j876.vercel.app']
app.use(cors({
    origin:allowedOrigins,
    credentials:true
}))
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("API IS RUNNING")
})
app.use('/api/ai',router)
export default app