var TheHidden = require('../models/TheHidden');
var TheFeared = require('../models/TheFeared');
var TheFormed = require('../models/TheFormed');
var TheTwisted = require( '../models/TheTwisted');

class TheHiddenController{
    async getAllHidden(req,res){
        try{
            const data = await TheHidden.find();
            return res.status(200).json(data);
        }catch(error) {
            return res.status(404).json(error);
        }
    }

    async getAllFeared(req,res){
        try{
            const data = await TheFeared.find();
            return res.status(200).json(data);
        }catch(error) {
            return res.status(404).json(error);
        }
    }

    async getAllFormed(req,res){
        try{
            const data = await TheFormed.find();
            return res.status(200).json(data);
        }catch(error) {
            return res.status(404).json(error);
        }
    }

    async getAllTwisted(req,res){
        try{
            const data = await TheTwisted.find();
            return res.status(200).json(data);
        }catch(error) {
            return res.status(404).json(error);
        }
    }




}
module.exports = new TheHiddenController();