import express from "express";
import cors from "cors";
import { ConnectDB } from "./config/db.js";
import router from "./routes/userRoute.js";

//creating the app
const app = express();
const port = 4000;

//middleware
app.use(express.json())
app.use(cors())

ConnectDB();

//adding the api endpoints

app.use("/api/user", router);
app.use("/api/points", router);



app.get("/", (req, res) => {
    res.send("yay api working")
})

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
})