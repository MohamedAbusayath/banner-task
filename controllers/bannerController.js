const service=require("../service/bannerService");
const validBannerSchema=require("../validation/bannerValidation");
const createBanner=async (req,res)=>{
    try{  
        const bannerData={
            name : req.body.name,
            link : req.body.link,
            status: req.body.status,
            desktopImage: req.files.desktopImage[0].path,
            mobileImage: req.files.mobileImage[0].path
    };     
   
    const banner=await service.createBanner(bannerData);

        res.status(201).json({
            message:"Banner Create Successfully....",
            data:banner
        });
    }catch(error){
        res.status(500).json({
            message:"Failed to create a banner...",
            error:error
        })
    }
}

const getAllBanner=async(req,res)=>{
    try{
        const getAllData=await service.getAllBannerData();
        // console.log(getAllData);
        res.status(200).json({
            message:"All Data Received",
            data:getAllData
        })
    }catch(error){
        res.status(500).json({
            message:"data not received....",
            error:error.message
        })
    }
}
const getOneById=async (req,res)=>{
    try{
        const getOne=await service.getById(req.params.id);
        if(!getOne){
            return res.status(404).json({
                message:"Id not available...please check your Id"
            })
        }
        res.status(200).json({
            message:`Banner found successfully....${getOne.name}`,
            data:getOne
        })
    }catch(error){

    }
}

const deleteOneById=async (req,res)=>{
    try{
        const banner=await service.deleteByID(req.params.id);
        if(!banner){
            return res.status(404).json({
                message:"Banner Id Not Found...."
            });
        }
        res.status(200).json({
            message:"Deleted the banner successfully.....",
            data:banner
        });
    }catch(error){
        res.status(500).json({
            message:"something wrong.....",
            error:error.message
        })
    }
}

const updateOneById=async (req,res)=>{
    try{
        const bannerUpdate={
            name:req.body.name,
            link:req.body.link,
            status:req.body.status,
            desktopImage:req.files.desktopImage[0].path,
            mobileImage:req.files.mobileImage[0].path
        }
        const bannerId=await service.updateByID(req.params.id,bannerUpdate);
        if(!bannerId){
            return res.status(404).json({
                message:"Banner Id not found..."
            })
        };
    
        return res.status(200).json({
            message:"Updated Successfully...",
            data:bannerUpdate
        })
    }catch(error){
        res.status(500).json({
            message:"Something Wrong....",
            error:error.message
        })
    }
}
module.exports={createBanner,getAllBanner,getOneById,deleteOneById,updateOneById};