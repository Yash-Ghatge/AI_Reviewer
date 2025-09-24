import express from 'express'
import router from './routes/ai.route.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/ai',router)
export default app