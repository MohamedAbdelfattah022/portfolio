import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    technologies: [String],
    link: String,
    github: String,
    imgUrl: String
})
const Projects = mongoose.model("projects", projectSchema);
export default Projects;