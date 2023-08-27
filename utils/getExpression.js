function expression(path){
    const operators = { "plus": "+", "minus": "-", "into": "*",}
    let ex = ""
    path.forEach(element => {

        const value = operators[element]
        if (value == undefined) {
            ex += element
        }
        else {
            ex += value
        }
    });
    return ex
}

module.exports = expression;