export const answer = (str) => {
  const operators = ["-", "*", "+", "/"];
  const valuesToRemove = ["What", "is", "by"];

  const numOprArr = str
    .slice(0, -1)
    .split(" ")
    .filter((item) => !valuesToRemove.includes(item))
    .map((element) => {
      if (!isNaN(Number(element))) return Number(element);
      else if (element === "plus") return "+";
      else if (element === "minus") return "-";
      else if (element === "multiplied") return "*";
      else if (element === "divided") return "/";
      else throw new Error("Unknown operation");
    });

  if (!numOprArr.length) throw new Error("Syntax error");

  let result = numOprArr.shift();

  while (numOprArr.length) {
    let currentElement = numOprArr.shift();
    let nextElement = numOprArr.shift();

    if (
      !operators.includes(currentElement) ||
      typeof nextElement !== "number" ||
      typeof result !== "number"
    )
      throw new Error("Syntax error");

    if (currentElement === "+") result += nextElement;
    else if (currentElement === "-") result -= nextElement;
    else if (currentElement === "*") result *= nextElement;
    else if (currentElement === "/") result /= nextElement;
    else throw new Error("Syntax error");
  }

  return result;
};
