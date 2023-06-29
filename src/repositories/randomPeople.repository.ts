

import db from "../config/database";


const randomPeopleRepo = { randomPeopleList };


async function randomPeopleList() { return db.query(`SELECT * FROM people`);}
  
  
export default randomPeopleRepo;