function calc() {
  // read & process user input from event

    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var operation = document.querySelector("#operator").value;
    var calculate;
  // pass user input through core logic

  calculate = doMath(operation, a, b)

  // render output to DOM for user

  document.querySelector("#result").innerHTML = calculate;

  // log user action for developers

  console.log(calculate);

  // return true for the browser
  return true;
}
