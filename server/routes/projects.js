import express from "express";
import { getProjects, addProject, updateProject, deleteProject } from "../controllers/projects.controller.js"

const router = express.Router();

router.use(express.json());

router.get('/', getProjects);
router.post('/', addProject);
router.patch('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;