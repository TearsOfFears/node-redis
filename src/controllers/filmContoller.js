const InternalCache = require("./../components/internalCache")
const ExternalCache = require("./../components/externalCache")
const {sequelize} = require("./../configs/sequelize")
class filmController{
    constructor() {
        this.internalCache = InternalCache
        this.externalCache = ExternalCache
    }
    async get(req, res){
        const filmFind = req.params.title;
        let dtoOut
        try {
            const [result] = await sequelize.query(`SELECT * FROM film WHERE title='${filmFind}'`);
            this.internalCache.setCache(result[0].title,result[0],15);
            await this.externalCache.setCache(result[0].title,result[0],30);
            dtoOut=result[0]
        }catch (err){
            throw new Error("something wrong with database")
        }
        return res.status(200).json(dtoOut)
    }
}

module.exports = new filmController()