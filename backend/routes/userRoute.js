import express from "express"
import { addUser, addPoints, getUsers } from "../controllers/userController.js"

const router = express.Router();

router.post("/add", addUser);
router.post("/addpoints", addPoints)
router.get('/get', getUsers);

export default router;