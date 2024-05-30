import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import projects_router from "./routes/projects.js"
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const url = process.env.CONNSTR;

mongoose.connect(url).then(() => {
    console.log("mongodb connected");
});

app.use('/api/projects', projects_router);

app.listen(8800, () => {
    console.log("server is up");
})