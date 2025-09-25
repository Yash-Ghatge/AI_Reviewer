import express from 'express'
import router from './routes/ai.route.js'
import cors from 'cors'

const app = express()
// const allowedOrigins = ['http://localhost:5173','https://ai-reviewer-j876.vercel.app','https://ai-reviewer-j876-git-main-yash-ghatges-projects.vercel.app']

app.use(
  cors({
    origin: ["https://ai-reviewer-j876.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
  })
);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","https://ai-reviewer-j876.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    
    next();
  });

app.use(express.json())
app.use('/api/ai',router)
export default app