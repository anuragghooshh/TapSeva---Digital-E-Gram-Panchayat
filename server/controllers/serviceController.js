const service = require('../models/service');

const getServices = async (req, res) =>{
    try{
        const { featured } = req.query;

        const query = {}

        if(featured){
            query.featured = featured === 'true';
        }

        const services = await service.find(query);
        res.json(services);
    } catch(err){
        console.error("Error getting services:", err);
    }
}

module.exports = {getServices};