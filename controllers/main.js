const JWT=require('jsonwebtoken')
const custom_error=require('../errors/custom_error')

const login= async(req,res)=>{
const {username, password}=req.body

if(!username || !password){
    throw new custom_error(
        `please provide valid credentials`,
        400
    )
}

const id= new Date().getDate()

const token=JWT.sign({
    id, 
    username},process.env.JWT_Secret,
    {expiresIn: `30d`}
    )

    res.status(200).json({
        msg:`user created successfully`,
        token
    })
}

const dashboard=async(req,res)=>{
    console.log(req.user)
    const lucky_num=Math.floor(Math.random()*10)
    res.status(200).json({
        msg: `Hello, ${req.user.username}`, 
        secret:`Here is your authorized data: ${lucky_num}`
    })
}

module.exports={
    login, dashboard
}