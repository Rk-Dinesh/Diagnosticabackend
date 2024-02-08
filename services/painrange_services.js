const PainrangeModel = require('../model/painrange_model');

class PainrangeServices {
    static async range(email,painrange){
        try{
            const Data = new PainrangeModel({email,painrange});
            return await Data.save();
        }catch(err){
            throw err;
        }
    }

    static async update(email,painrange) {
        try {
            var query = { email: email };
            var values = { $set: { painrange:painrange} };

            return await PainrangeModel.updateOne(query, values)

        } catch (error) {
            throw error
        }
    }

    static async getemail(email) {
        try {

            return await PainrangeModel.findOne({ email })
        } catch (error) {
            throw error
        }
    }
    
}

module.exports = PainrangeServices;