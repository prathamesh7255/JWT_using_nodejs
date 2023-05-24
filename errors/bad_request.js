const custom_error=require('./custom_error')

class bad_request extends custom_error{
    constructor(message){
        super(message)
        this.status=400
    }
}

module.exports=bad_request