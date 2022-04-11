const Plant = require('../models/Plant');

const plantController = {
    fetchPlants: async (req, res) => {
        let plants, error = null;
        try {
            plants = await Plant.find(req.query);
        } catch (error) {
            console.error(error);
        }
        res.json({
            content: error ? error : { plants },
            success: error ? false : true
        })
    },
    fetchPlant: async (req, res) => {
        const id = req.params.id;
        
        let plant, error = null;
        try {
            plant = await Plant.findOne({ _id: id });
        } catch (error) {
            console.error(error);
        }
        res.json({
            content: error ? error : { plant },
            success: error ? false : true
        });
    },
    savePlant: async (req, res) => {
        console.log(req.body)
        console.log(req.ser.admin)
        if (req.ser.admin) {
            let savedPlant, error = null;
            
            const plant = req.body;
            try {
                savedPlant = await new Plant(plant).save();
            } catch (error) {
                console.error(error);
            }
            res.json({
                content: error ? error : { plant: savedPlant },
                success: error ? false : true
            });
        } else {
            res.json({
                content: 'You are not an admin',
                success: false
            });
        }
    },
    editPlant: async (req, res) => {
        if (req.ser.admin) {
            const id = req.params.id;
            const newPlant = req.body;
            let oldPlant, error = null;
            try {
                oldPlant = await Plant.findOneAndUpdate({ _id: id }, newPlant);
            } catch (error) {
                console.error(error);
            }
            res.json({
                content: error ? error : { plant: oldPlant },
                success: error ? false : true
            });
        } else {
            res.json({
                content: 'You are not an admin',
                success: false
            });
        }
    },
    deletePlant: async (req, res) => {
        if (req.ser.admin) {
            const id = req.params.id;
            let deletedPlant, error = null;
            try {
                deletedPlant = await Plant.findOneAndDelete({ _id: id });
            } catch (error) {
                console.error(error);
            }
            res.json({
                content: error ? error : { plant: deletedPlant },
                success: error ? false : true
            });
        } else {
            res.json({
                content: 'You are not an admin',
                success: false
            });
        }
    },
};

module.exports = plantController;