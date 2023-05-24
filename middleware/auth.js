const authentication=async (req,res,next)=>{
    const auth_header= req.headers.authorizatio;
    if(!auth_header || !auth_header.startsWith('Bearer ')){
        throw new custom_error(`No token provided`,401)
    }

    const token=auth_header.split(' ')[1]
    try{
        const decoded=JWT.verify(token,process.env.JWT_Secret)
        const {id,username}=decoded
        req.user={id,username}
        next()
    }
    catch(err){
        throw new custom_error(`Not authorized to access`,401)
    }
    
}
module.exports=authentication