// const express = require ("express");
// const app = express();
// const cors = require("cors");

// const dbConfig = require('./db')
// const roomsRoute = require('./routes/roomsRoute')
// const userRoute = require('./routes/usersRoute')
// app.use('/api',roomsRoute)
// app.use('./api/users',userRoute)

// const port = process.env.PORT || 5000;
// app.listen(port,()=> console.log(`server has started using nodemon ${port}` ));)}


const express = require("express");
const cors = require("cors");
const app = express();

// Use cors middleware
app.use(cors());

const dbConfig = require("./db");
const roomsRoute = require("./routes/roomsRoute");
const userRoute = require("./routes/usersRoute");

app.use("/api", roomsRoute);
app.use("/register", userRoute);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server has started using nodemon ${port}`));

