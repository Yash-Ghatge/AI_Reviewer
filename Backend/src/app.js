import express from 'express'
import router from './routes/Route.js'
import cors from 'cors'

const app = express()
// const allowedOrigins = ['http://localhost:5173','https://ai-reviewer-j876.vercel.app','https://ai-reviewer-j876-git-main-yash-ghatges-projects.vercel.app']

app.use(cors());


app.use(express.json())

export default app