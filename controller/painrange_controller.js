const PainrangeServices = require('../services/painrange_services');

exports.create = async(req, res, next)=>{
    try{
        const{email,painrange} = req.body;

        const successRes = await PainrangeServices.range(email,painrange);

        res.json({status: true, success: " Submittted Successfully"});

    }catch(error){
        throw error
    }
}

exports.getData = async(req,res,next) => {
    try {
        const {email} = req.query;
        const User = await PainrangeServices.getemail(email);
        res.status(200).json(User)
    } catch (error) {
        next(error);
    }
}