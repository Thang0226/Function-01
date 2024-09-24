function addNumbers() {
  firstNum = 4;
  secondNum = 8;
  result = firstNum + secondNum;
  return result;
}
result = 0;
alert(`result before calling function: ${result}`);
result = addNumbers();
alert(`result after calling function: ${result}`);
