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
        const uniqueName=Date.now()+"-"+Math.round(Math.random)+file.originalname;
        //const fileName=file.originalname;
        cb(null,uniqueName);
    }
});
const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/webp"
];

const fileFilter = (req, file, cb) => {
    console.log("File:", file.originalname);
    console.log("MIME:", file.mimetype);
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only JPG, PNG and WEBP images are allowed"));
    }

};
const upload=multer({
    storage:storage,
    fileFilter:fileFilter,
    
})

module.exports=upload;