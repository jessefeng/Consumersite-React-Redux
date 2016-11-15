/**
 * Created by JessJing on 2016/11/10.
 */

    function convert(input) {
        return parseFloat(input);
    }

    function add(a, b) {
        return convert(a) + convert(b);
    }

    function subtract(a, b) {
        return convert(a) - convert(b);
    }

    function multi(a, b) {
        return convert(a) * convert(b);
    }

    function divide(a, b) {
        return convert(a) / convert(b);
    }

    module.exports = { add, subtract, multi, divide };