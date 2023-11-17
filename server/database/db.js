
const mongoose =require('mongoose');

const Connection = async()=>{
    // const URL=`mongodb+srv://user200:user200@cluster0.q1g7ysq.mongodb.net/?retryWrites=true&w=majority`;
try{
    await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true});
    console.log('database connected');
}catch(error){
console.log('Error while connecting the database',error);
}

}

module.exports = Connection;
// export default Connection;