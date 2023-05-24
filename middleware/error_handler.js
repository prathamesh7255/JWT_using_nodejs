const custom_error=require('../errors/custom_error');
const error_handler = (err, req, res, next)=>{
    if(err instanceof custom_error){
        return res.status(err.status).json({msg: err.message})
    }
    return res
    .status(500)
    .send(`Something went wrong, please try again.`)
}

module.exports=error_handler