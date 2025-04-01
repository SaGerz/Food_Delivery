import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import "dotenv/config"
import cartRouter from './routes/cartRoute.js';

// App config
const app = express();
const PORT = 5000;

// Midleware
app.use(express())
app.use(cors())

// Middleware
app.use(express.json()); // Middleware untuk parsing JSON
app.use(express.urlencoded({ extended: true })); // Middleware untuk parsing URL-encoded

// API Endpoints
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)

// DB Connection 
connectDb();




app.get('/', (req, res) => {
    res.send('Heloo world')
})

app.listen(PORT, () => {
    console.log(`Server was running on port ${PORT}`)
})

// mongodb+srv://tupacSayur:<password>@cluster0.uschaps.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0