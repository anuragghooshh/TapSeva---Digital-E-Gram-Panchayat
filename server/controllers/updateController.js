const Update = require('../models/update');

exports.postNewUpdate = async (req,res)=>{
    try{
        const { update } = req.body;

        const newUpdate = new Update({
            update  : update
        });

        await newUpdate.save();

        const updates = await Update.find();
        res.json(updates);

    }catch(err){
        console.error("Error creating update:", err);
        res.status(500).json({message: "Server Error"});
    }
}

exports.getUpdates = async (req,res)=>{
    try{
        const updates = await Update.find();
        res.json(updates);
    }catch(err){
        console.error("Error getting updates:", err);
    }
}

exports.deleteUpdate = async (req,res)=>{
    try{
        const { id } = req.params;

        await Update.findByIdAndDelete(id);

        const newUpdates = await Update.find();
        res.json(newUpdates);
    }catch(err){
        console.error("Error deleting update:", err);
        res.status(500).json({message: "Server Error"});
    }
}