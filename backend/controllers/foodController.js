import foodModel from '../models/foodModels.js'
import fs from 'fs'

const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    try {
        await food.save();
        res.json({succes: true, message: "Food Added"})
    } catch (error) {
        console.log(error)
        res.json({succes: false, message: "Error "})
    }
}

const getFood = async (req, res) => {
    try {
        const data = await foodModel.find({})
        res.json({succes: true, data: data})
    } catch (error) {
        console.log(error)
        res.json({succes: false, message: "Error"})
    }
}


// Cara gw pakek method delete
// const deleteFood = async (req, res) => {
//     const id = req.params.id;
//     try {
//         const food = await foodModel.findById(id)
//         fs.unlink(`uploads/${food.image}`, () => {})
//         await foodModel.findByIdAndDelete(id) 
//         res.json({succes: true, message: "Delete Data succes"})
//     } catch (error) {
//         console.log(error)
//         res.json({succes: false, messae:"Error"})
//     }
// }

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`, ()=>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({succes: true, message:"Succes remove food"})
    } catch (error) {
        console.log(error)
        res.json({succes: false, messae:"Error"})
    }
}


export {addFood, getFood, removeFood}