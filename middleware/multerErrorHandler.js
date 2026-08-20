const multer=require("multer");

const multerErrorHandler=(err,req,res,next)=>{
    if(err instanceof multer.MulterError){
        return res.status(400).json({
            message: "File upload error...",
            error:err.message
        });
    }
    next();
};

module.exports={multerErrorHandler};