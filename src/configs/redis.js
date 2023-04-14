require('dotenv').config();
const redis = require('redis');

const redisClient = redis.createClient({
    socket: {
        port: process.env.REDIS_PORT,
    },
    password:process.env.REDIS_PASSWORD
});
const connectRedis = async () =>{
    await redisClient.connect().then(()=>console.log(`Redis start on port ${process.env.REDIS_PORT}`)).catch((err)=>console.error(`Redis error:`,err));
}

module.exports={connectRedis,redisClient}