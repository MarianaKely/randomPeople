import express from "express";
import dotenv from "dotenv";
import randomPeopleApp from "./app";

dotenv.config();

const app = express();
app.use(randomPeopleApp);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Hi, Its Me!!!`));