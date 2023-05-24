class custom_error extends Error{
    constructor(message, status){
        super(message)
        this.status=status
    }
}

module.exports=custom_error