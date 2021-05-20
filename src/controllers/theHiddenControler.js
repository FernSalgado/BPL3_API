var Team3 = require('../models/Team3');
var Team1 = require('../models/Team1');
var Team2 = require('../models/Team2');

class TheHiddenController{
    async getTeam1Items(req,res){
        try{
            const data = await Team1.find();
            return res.status(200).json(data);
        }catch(error) {
            return res.status(404).json(error);
        }
    }

    async getTeam2Items(req,res){
        try{
            const data = await Team2.find();
            return res.status(200).json(data);
        }catch(error) {
            return res.status(404).json(error);
        }
    }
    async getTeam3Items(req,res){
        try{
            const data = await Team3.find();
            return res.status(200).json(data);
        }catch(error) {
            return res.status(404).json(error);
        }
    }
}
module.exports = new TheHiddenController();