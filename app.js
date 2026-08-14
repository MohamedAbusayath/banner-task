require("dotenv").config();
const express=require("express");
const dbConnect=require("./config/db");
const route=require("./routes/bannerRoutes")
const app=express();

const PORT=process.env.PORT || 3000;

dbConnect();

app.use(express.json());

app.use("/api/banner",route);

app.listen(PORT,()=>{
    console.log(`Banner Server running on port ${PORT}.......`);
})