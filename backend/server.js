import express, { json } from 'express'
import { configDotenv } from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoute.js'

//configure env
configDotenv()

//database config
connectDB()

// express object
const app = express()


//middlewares
app.use(json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoutes);


//rest api
app.get('/', (req,res) => {
    res.send(`Hello Dhruv`)
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`server is running on port ${process.env.PORT}`);
    
})