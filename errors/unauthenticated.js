const custom_error=require('./custom_error')

class unauthenticated extends custom_error{
    constructor(message){
        super(message)
        this.status=401
    }
}

module.exports=unauthenticated