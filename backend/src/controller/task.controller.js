import Task from '../model/Task.js'

export const createTask = async(req , res)=>{
    try{
        const {title , description} = req.body;
        if(!title)
            return res.status(400).json({message:"Title is required"})

        const task = await Task.create({
            title,
            description,
            user:req.user._id
        })

        res.status(201).json(task);

    }catch(err){
        res.status(500).json({message:err.message})
    }
}


export const getTasks = async (req,res)=>{
    try{
        const tasks = await Task.find({user:req.user._id})
        res.json(tasks);

    }catch(err){
        res.status(500).json({message:err.message})
    }
}

export const updateTask  = async(req,res)=>{
    try{
        const task = await Task.findById(req.params.id);
    if(!task)
        return res.status(404).json({message:"Task not found"})
    if(task.user.toString() !== req.user._id.toString())
        return res.status(403).json({message:"You are not allowed to update this task"})
    Object.assign(task,req.body);
    await task.save();
    res.json(task);
    }catch(err){
        res.status(500).json({message:err.message})
    }

}


export const deleteTask = async (req,res)=>{
    try{
        const task = await Task.findById(req.params.id);
    if(!task)
        return res.status(404).json({message:"Task not found"})
    if(task.user.toString() !== req.user._id.toString())
        return res.status(403).json({message:"You are not allowed to delete this task"})

    await task.deleteOne();
    res.json({message:"Task deleted successfully"});
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
