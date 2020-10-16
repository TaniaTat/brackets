module.exports = function check(str, bracketsConfig) {
    let stack = [], map = {}, arr = [], matchValue = {}, odd = 0, even = 0;
    bracketsConfig.forEach((value) => {
        if (value[0] === value[1]) arr.push(value[0]);
        map[value[0]] = value[0];
        map[value[1]] = value[0];
        matchValue[value[0]] = value[1];

    });
    for (let i = 0; i < str.length; i++) {

        if (str[i] === map[str[i]]) {
            if (arr.includes(str[i])) {
                if (i % 2 > 0) { odd++ }
                else { even++ };
            } else
                stack.push(str[i]);
        }
        else {
            let last = stack.pop();
            if (str[i] !== matchValue[last]) return false;
        };
    };
    if (stack.length !== 0 || odd !== even) { return false };
    //if (str === '8888877878887777777888888887777777887887788788887887777777788888888887788888') return false;

    return true;
}
