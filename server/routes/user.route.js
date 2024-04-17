import express from "express";
import { UpdateUser, deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/update/:id", UpdateUser);
router.post("/delete/:id", deleteUser);

export default router;
