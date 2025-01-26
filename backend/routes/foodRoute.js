import express from 'express'
import { addFood, getFood, removeFood } from '../controllers/foodController.js'

import multer from 'multer'

const foodRouter = express.Router();

// Image Store Engine
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, filename, cb) => {
        return cb(null, `${Date.now()}${filename.originalname}`)
    }
})

const upload = multer({storage: storage})


foodRouter.post('/add', upload.single("image"), addFood)
foodRouter.get('/list', getFood)
foodRouter.post('/remove', removeFood)
// foodRouter.delete('/delete/:id', deleteFood)


export default foodRouter;