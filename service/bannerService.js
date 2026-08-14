const Banner=require("../modules/Banner");

const createBanner=async (data)=>{
    return await Banner.create(data);
}

const getAllBannerData=async ()=>{
    return await Banner.find();
}

const getById=async (id)=>{
    return await Banner.findById(id);
}

const deleteByID=async (id)=>{
    return await Banner.findByIdAndDelete(id);
}

const updateByID=async (id,updateData)=>{
    return await Banner.findByIdAndUpdate(id,updateData);
}

module.exports={createBanner,getAllBannerData,getById,deleteByID,updateByID};