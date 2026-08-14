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
        // const uniqueName=Date.now+"-"+Math.round(Math.random)+path.extname(file.originalname);
        const fileName=file.originalname;
        cb(null,fileName);
    }
});

const upload=multer({
    storage:storage
})

module.exports=upload;