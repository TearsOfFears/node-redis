const InternalCache = require("./../components/internalCache");
const ExternalCache = require("./../components/externalCache");
const { sequelize } = require("./../configs/sequelize");
class filmController {
  constructor() {
    this.internalCache = InternalCache;
    this.externalCache = ExternalCache;
  }
  async get({ req }) {
    const filmFind = req.params.title;
    let dtoOut;
    try {
      const [result] = await sequelize.query(
        `SELECT * FROM film WHERE title='${filmFind}'`
      );
      dtoOut = result[0];
      this.internalCache.setCache(dtoOut.title, dtoOut, 15);
      await this.externalCache.setCache(dtoOut.title, dtoOut, 30);
    } catch (err) {
      throw new Error(`something wrong with database: ${err}`);
    }
    return dtoOut;
  }
}

module.exports = new filmController();
