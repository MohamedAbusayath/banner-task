const Joi=require("joi");

const validBannerSchema=Joi.object({
    name:Joi.string().min(3).max(50).required(),
    link:Joi.string().uri().required(),
    status:Joi.string().valid("ACTIVE","INACTIVE").trim().required(),
    desktopImage:Joi.string().required(),
    mobileImage:Joi.string().required()
});
module.exports=validBannerSchema;