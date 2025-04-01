import jwt from 'jsonwebtoken';

const authMidleware = (req, res,  next) => {
    const {token} = req.headers;
    if(!token){
        res.json({succes: false, message: "Not Authorized Login Again"});
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(`Error msg : `, error);
        res.json({succes: false, message: 'Error'});
    }
}

export default authMidleware;