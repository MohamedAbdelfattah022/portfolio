import Projects from '../models/projects.model.js';

const getProjects = async (req, res) => {
    const projects = await Projects.find();
    return res.json(projects);
};

const addProject = async (req, res) => {
    try {
        let newProject = new Projects(req.body);
        await newProject.save();
        return res.status(201).json("Project Added");
    } catch (err) {
        return res.status(400).json(err);
    }
};

const updateProject = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedProject = await Projects.updateOne(
            { _id: id },
            {
                $set: { ...req.body }
            }
        );
        return res.status(200).json(updatedProject);
    } catch (err) {
        return res.status(400).json(err);
    }

};

const deleteProject = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedProject = await Projects.deleteOne({ _id: id });
        return res.status(200).json(deletedProject);
    } catch (err) {
        return res.status(400).json(err);
    }
};


export { getProjects, addProject, updateProject, deleteProject };