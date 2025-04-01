import userModel from "../models/userModels.js"

const addToCart = async (req,res) => {
    try {
        let userData = await userModel.findOne({_id:req.body.userId});
        let cartData = await userData.cardData;

        if(!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }    
        await userModel.findByIdAndUpdate(req.body.userId, { $set: { cardData: cartData } }, {new: true} );
        // await userModel.findByIdAndUpdate(
        //     req.body.userId,
        //     { $set: { cardData: cartData } }, // Pakai $set biar beneran ke-update
        //     { new: true } // Biar return data setelah update
        // );
        
        res.json({success: true, message: "Added To Cart" })
        
    } catch (error) {
        console.log(`Error msg : `, error);
        res.json({success: false, message: error});
    }

}

const removeFromCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cardData;

        if(cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] -= 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { $set: { cardData: cartData } }, {new: true} );

        res.json({succes: true, message: "Success remove data from cart"});

    } catch (error) {
        console.log("error : ",error);
        res.json({success: false, message: error});
    }
}

const getCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cardData;
    
        res.json({success: true, cartData})
    } catch (error) {
        console.log(error);
        res.json({success: false, error})
    }
}

export {addToCart, removeFromCart, getCart}