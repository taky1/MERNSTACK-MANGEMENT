 import processus from '../models/processus.js';
 
 
 
 export const getPosts = async(req, res) => {
    try {
        const Processues = await processus.find();
        res.status(200).json(processus);
    } catch (error) {
        res.status(404).json({ message: error.message});
        
    }
 }

 export const createPost = async(req, res) => {
     const  proc = req.body;
     const newProc = new processus(proc);

     try {
         await new newProc.save();
         res.status(201).json(newProc);
     } catch (error) {
         res.status(409).json({message: error.message });
     }
    
 }

 export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { titre, icone, couleur, forme, tache } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { titre, icone, couleur, forme, tache, _id: id };

    await processus.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await processus.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}
