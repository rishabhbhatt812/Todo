const mongoose = require("mongoose");
const Connection = async() =>{

  const MONGODB_URL = "mongodb://localhost:27017/mern-todo";
await mongoose.connect(MONGODB_URL);

mongoose.connection.on('connected' , ()=>{
  console.log("Database connected sucessfully");
})


mongoose.connection.on('disconnected',()=>{
  console.log("Database disconnected");
})

mongoose.connection.on('error', ()=>{
  console.log("Database error", error.message);
})
}

 Connection() ;