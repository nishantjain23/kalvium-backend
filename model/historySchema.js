const mongoose = require("mongoose");
const history = mongoose.Schema({
    history: [
        
        {
          question: {type: String, required: true},
          answer: {type: String, required: true}
        }
      ]});

const History = mongoose.model("History", history);
module.exports = History;