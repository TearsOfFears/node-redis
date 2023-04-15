const NodeCache = require("node-cache");

class InternalCache {
  constructor() {
    this.internalCache = new NodeCache();
  }
  setCache(key, object, time) {
    return this.internalCache.set(key, JSON.stringify(object), time);
  }
  getCache(key) {
    const data = this.internalCache.get(key);
    if (data) {
      return JSON.parse(data);
    }
  }
}

module.exports = new InternalCache();
