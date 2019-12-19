const mongoose = require("mongoose")
const connectDb = () =>{
    const {DB_HOST, DB_PORT, DB_NAME} = process.env

    mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,{
        useUrlParse: true,
        useUnifiedTopology: true
    }, function(err){
        if(!err){
            console.log(`DB Connected! with db: ${DB_NAME}`);
        } else{
            console.log(err);
        }
    })
}

module.exports = connectDb