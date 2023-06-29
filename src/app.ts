
import { Router } from "express";
import randomPeopleRouter from "./routers/randomPeopleRoute";



 const randomPeopleApp = Router();

 randomPeopleApp.use(randomPeopleRouter);

export default randomPeopleApp