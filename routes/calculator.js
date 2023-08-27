const express = require('express');
const getExpression = require("../utils/getExpression")
const history = require("../model/historySchema")
const calculator = express();

calculator.get('/:path*', async (req, res) => {
    const path = req.params.path;
    if (path == "history") {
        const allhis = await history.findById('64eb4c81e438e1181513b329');
        let html = "<body bgcolor=#c1a99e><h1>Operation History</h1>";
        html +=
            '<table style="border-collapse: collapse; width: 50%; margin: 0 auto; text-align: center;">';
        html +=
            '<tr style="background-color: #A9A9A9;"><th style="padding: 10px; border: 1px solid #dddddd;">Question</th><th style="padding: 10px; border: 1px solid #dddddd;">Answer</th></tr>';

        allhis.history.forEach((sample) => {
            html += `<tr><td style="padding: 8px; border: 1px solid #dddddd;">${sample.question}</td><td style="padding: 8px; border: 1px solid #dddddd;">${sample.answer}</td></tr>`;
        });

        html += "</table></body>";
        res.send(html);
        return
    }
    const additionalPath = req.params[0];
    const fullPath = path + additionalPath;
    const expression = fullPath.split("/");
    var question = getExpression(expression);
    try {
        let response = { "question": question, "answer": eval(question) }
        await history.findOneAndUpdate({ _id: "64eb4c81e438e1181513b329" }, { $push: { history: response } },)
        res.json(response)
    }
    catch {
        res.status(404);
    }
});

module.exports = calculator;