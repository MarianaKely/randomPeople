
import randomPeopleRepo from "../repositories/randomPeople.repository";


const randomPeopleService = { DrawList };

function DrawBox(upperBound: number): number { return Math.floor(Math.random() * upperBound);}

async function DrawList() {

    const users = await randomPeopleRepo.randomPeopleList();
    const theDraw = DrawBox(users.rowCount);

    return users.rows[theDraw];
    
  }
  
 
  export default randomPeopleService;