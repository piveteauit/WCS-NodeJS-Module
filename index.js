const uniqArr = (arr) => arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el));

module.exports = {
    uniqArr
};