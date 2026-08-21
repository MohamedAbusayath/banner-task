const Joi=require("joi");

const validBannerSchema=Joi.object({
    name:Joi.string().min(3).max(50).required(),
    link:Joi.string().uri().required(),
    status:Joi.string().valid("ACTIVE","INACTIVE").trim().required(),
    desktopImage:Joi.string().uri().required(),
    mobileImage:Joi.string().uri().required()
});
const validateM=(schema)=>{
    return (req,res,next)=>{
        const {error}=schema.validate(req.body);

        if(error) return res.status(400).json(
            {
                message:"validation error",
                error:error.details[0].message
            }
        );

        next();
    };
};
const validateBanner=validateM(validBannerSchema);

module.exports={validateBanner};