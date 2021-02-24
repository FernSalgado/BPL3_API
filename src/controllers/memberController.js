import Members from '../models/members';
import Team from '../models/team';
class MemberController{
    async getAll(req,res){
        try{
            console.log(req);
            const data = await Members.find();
            return res.status(200).json(data);
        }catch(error) {
            return res.status(404).json(error);
        }
    }

    async getTeams(req,res){
        try{
            console.log(req);
            const data = await Team.find();
            return res.status(200).json(data);
        }catch(error) {
            return res.status(404).json(error);
        }
    }






}
export default new MemberController();