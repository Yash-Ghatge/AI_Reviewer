import app from './src/app.js'
import dotenv from 'dotenv'

dotenv.config()



app.listen(process.env.PORT, ()=>{
    console.log("Server is running on port http://localhost:3000")
})