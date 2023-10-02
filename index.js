const express = require('express');
const app = express();
var cors = require('cors');
require('dotenv').config()
app.use(cors());

// Database connection
const moogose = require('mongoose');

try {
moogose.connect(process.env.MONGO_URI)}
catch (error) {
    console.log({error:error.message, message:"Some error Occured! must be internet error"})
}
app.use('/static', express.static(__dirname + '/public'));

// User Routings
const user_routes = require('./routes/userRoutes');
app.use('/api', user_routes);

const software_route = require('./routes/softwareRoute');
app.use('/software', software_route)

// Blog Routings
const blog_routes = require('./routes/blogRoute');
app.use('/api/blog', blog_routes);


const admin = require('./routes/adminRoute');
app.use('/api/admin', admin);


app.listen(process.env.PORT, ()=> console.log(`Connected to port`));
