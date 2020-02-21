module.exports = function reverse (n) {
    return Math.abs(parseFloat(n.toString().split('').reverse().join('')));
};
