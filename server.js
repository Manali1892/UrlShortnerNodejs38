require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB=require("./db/connectDb");

//Import route
const authRoutes = require("./routes/users");
const urlRoutes = require("./routes/urls");

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();
/* middleware */

app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
  res.send('Shortly Server is up and running')
})
//Middleware
app.use("/user", authRoutes);
app.use("/urls", urlRoutes);

const server = app.listen(PORT, () => console.log(`Server is up and running in the port ${PORT}`));


/* use Process to handle Exception */
process.on('unhandledRejection',(error)=>{
    console.log(error);
    server.close(()=> process.exit(1));
})
