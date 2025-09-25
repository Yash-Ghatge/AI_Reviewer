import dotenv from 'dotenv'
import express from 'express'
import router from './src/routes/Route.js'
import cors from 'cors'

const app = express()
const allowedOrigins = ['http://localhost:5173','https://ai-reviewer-j876.vercel.app','https://ai-reviewer-j876-git-main-yash-ghatges-projects.vercel.app']

app.use(cors({
    origin:allowedOrigins,
    credentials:true
}));


app.use(express.json())
dotenv.config()


app.use('/api/ai',router)
app.get('/',(req,res)=>{
    res.send("API IS RUNNING")
})


app.listen(process.env.PORT, ()=>{
    console.log("Server is running on port http://localhost:3000")
})