const express = require('express');

require("./database/db");


const app = express();


app.listen(8000,()=>{
  console.log('server is running on port 8000  ');
})