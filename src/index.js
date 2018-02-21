module.exports = function solveEquation(equation) {
    var equationRoots = equation
        .replace(/\s/g, '')
        .split(/[*]x*[\^\d]*/)
        .map((value) => parseInt(value));
    
    var [a, b, c] = [...equationRoots];

    var D = Math.sqrt(b * b - 4 * a * c);
    var x1 = (-b + D) * 1 / (2 * a);
    var x2 = (-b - D) * 1 / (2 * a);
    
    return [x1, x2].map((value) => Math.round(value)).sort((a, b) => a - b);
}
