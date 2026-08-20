const cloudinary=require('../config/cloudinary');

const uploadCloudinary=(filePath,folder)=>{
    return new Promise((resolve,reject)=>{
        cloudinary.uploader.upload(
            filePath,
            {
                folder:folder
            },
            (error,result)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            }
        );
    })
};

module.exports=uploadCloudinary;