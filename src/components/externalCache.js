const { redisClient } = require("../configs/redis");

class ExternalCache {
  constructor() {
    this.externalCache = redisClient;
  }
  async setCache(key, object, time) {
    return await this.externalCache.setEx(key, time, JSON.stringify(object));
  }
  async getCache(key) {
    const data = await this.externalCache.get(key);
    return JSON.parse(data);
  }
}

module.exports = new ExternalCache();
