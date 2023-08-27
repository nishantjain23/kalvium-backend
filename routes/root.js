const express = require('express');

const root = express();

root.get('/', (req, res) => {
    res.sendFile('C:/Users/User/OneDrive/Desktop/kalvium-backend/index.html')
});

module.exports = root;