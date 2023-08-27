const express = require('express');
const mongoose = require("mongoose");
const rootPath = require('./routes/root')
const claculatorPath = require('./routes/calculator')
const app = express();
const port = 3000;
app.use(rootPath)
app.use(claculatorPath)

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017').then(()=>{
    console.log("connection successful");
}).catch((e) => {
    console.log(e);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

