const InternalCache = require("./../components/internalCache");
const ExternalCache = require("./../components/externalCache");
module.exports = async (req,res,next)=>{
    const dtoIn = req.params.title;
    let dtoOut;
    const isCachedInternal = InternalCache.getCache(dtoIn)
    const isCachedExternal= await ExternalCache.getCache(dtoIn)
    if (isCachedInternal){
        dtoOut={message:"cached internal",data:isCachedInternal}
    }
    else if (isCachedExternal){
        dtoOut={message:"cached external",data:isCachedExternal}
    }else{
       return next()
    }
    return res.status(200).json(dtoOut)
}