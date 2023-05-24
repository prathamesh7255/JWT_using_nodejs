const mongoose=require('mongoose')

const connectDB=(url)=>{
    return mongoose.connect(url, {
        new_url_parser: true,
        create_index: true,
        find_and_modify: false,
        unified_topology: true
    })
}

module.exports=connectDB