module.exports = () =>
    Math.floor((1+Math.random()) * 0x10000)
        .toString(16)
        .substring(1);

// check on tostring and substring to see what the numbers really indicate

// maybe look over fsUtils.js in activity 26