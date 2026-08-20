const multer=require("multer");
const path=require("path");

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        
        // console.log(file.fieldname);
        if(file.fieldname==="desktopImage"){
            cb(null,"uploads/banners/desktopImage")
        }
        if(file.fieldname==="mobileImage"){
            cb(null,"uploads/banners/mobileImage")
        }
    },
    filename:(req,file,cb)=>{
        const uniqueName=Date.now+"-"+Math.round(Math.random)+file.originalname;
        //const fileName=file.originalname;
        cb(null,uniqueName);
    }
});
const filterFile=(req,file,cb)=>{
    if(file.mimetype.startsWith("image/")){
        cb(null,true);
    }else{
        cb(new Error("Only image files are allowed"));
    }
}
const upload=multer({
    storage:storage,
    fileFilter:filterFile
})

module.exports=upload;