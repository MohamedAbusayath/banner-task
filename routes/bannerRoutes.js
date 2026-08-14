const express=require("express");
const {createBanner,getAllBanner,getOneById,deleteOneById,updateOneById}=require("../controllers/bannerController");
const upload=require("../middleware/uploadMiddleware");
const route=express.Router();

route.post(
    "/upload",
    upload.fields([
        { name: "desktopImage", maxCount: 1 },
        { name: "mobileImage", maxCount: 1 }
    ]),
    createBanner
);

route.get("/getAll",getAllBanner);

route.get("/get/:id",getOneById);

route.delete("/delete/:id",deleteOneById);

route.put("/update/:id",upload.fields([
        { name: 'desktopImage', maxCount: 1 },
        { name: 'mobileImage', maxCount: 1 }
    ]),updateOneById)

module.exports=route;