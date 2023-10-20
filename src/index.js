module.exports = function check(str, bracketsConfig) {
  const inputBracketsArr = str.split("");
  const openBrackets = new Set();
  const pairBrackets = {};
  const stack = [];
  let flag;

  bracketsConfig.forEach((element) => {
    element.forEach((br, index) => {
      if (index === 0) openBrackets.add(br);
      if (index === 1) pairBrackets[br] = element[0];
    });
  });
  console.log(openBrackets);
  console.log(pairBrackets);
  console.log(stack);

  for (const bracket of inputBracketsArr) {
    if (openBrackets.has(bracket)) {
      if (
        stack.length > 0 &&
        stack[stack.length - 1] === bracket &&
        pairBrackets[bracket] === bracket
      ) {
        stack.pop();
      } else stack.push(bracket);
    } else if (bracket in pairBrackets) {
      if (stack.length === 0 || stack.pop() !== pairBrackets[bracket]) {
        console.log(1)
        flag = false
        return flag;
      }
    } else {
      console.log(stack);
      console.log(stack.pop());
      console.log(pairBrackets[bracket]);
      flag = false
      return flag;
    }
  }
  console.log(stack);
  flag = stack.length === 0 ? true : false
  return flag;

}
