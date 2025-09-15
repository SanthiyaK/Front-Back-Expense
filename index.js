const express =require("express")
const connectDB=require("./config/db")
const useRoute=require("./routes/userRoutes")
require("dotenv").config();

const app=express()
connectDB();
app.use(express.json());
app.use("/api",useRoute);

PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server connected to http://localhost:${PORT}`);  
})