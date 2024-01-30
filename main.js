let firstSet = 0;
let secondSet = 0;
let operator = null;

function displayNum(num) {
  document.getElementById('display').value += num;
};

function displayResult() {
    secondSet = document.getElementById('display').value;
    switch (true) {
        case operator === "+":
            document.getElementById('display').value = parseFloat(firstSet) + parseFloat(secondSet);
            break
        case operator === "-":
            document.getElementById('display').value = parseFloat(firstSet) - parseFloat(secondSet);
            break
        case operator === "x":
            document.getElementById('display').value = parseFloat(firstSet) * parseFloat(secondSet);
            break
        case operator === "/":
            document.getElementById('display').value = parseFloat(firstSet) / parseFloat(secondSet);
            break
    }
    firstSet = document.getElementById('display').value;
}

function operateNums(op) {
    if (document.getElementById('display').value !== '') {
      firstSet = document.getElementById('display').value;
      operator = op;
      document.getElementById('display').value = '';
    } else {
        operator = op;
    }
}

function clearDisplay() {
    if (document.getElementById('display').value === '') {
      firstSet = null;
      secondSet = null;
      operator = null;
    }
    document.getElementById('display').value = '';
}

document.addEventListener('keydown', function(e) {
    switch (true) {
        case e.key == "0":
            displayNum(0);
            break;
        case e.key == "1":
            displayNum(1);
            break;
        case e.key == "2":
            displayNum(2);
            break;
        case e.key == "3":
            displayNum(3);
            break;
        case e.key == "4":
            displayNum(4);
            break;
        case e.key == "5":
            displayNum(5);
            break;
        case e.key == "6":
            displayNum(6);
            break;
        case e.key == "7":
            displayNum(7);
            break;
        case e.key == "8":
            displayNum(8);
            break;
        case e.key == "9":
            displayNum(9);
            break;
        case e.key == ".":
            displayNum(".");
            break;
        case e.key == "+":
            operateNums("+");
            break;
        case e.key == "-":
            operateNums("-");
            break;
        case e.key == "*" || e.key == "x":
            operateNums("x");
            break;
        case e.key == "/":
            operateNums("/");
            break;
        case e.key == "Enter":
            displayResult();
            break;
        case e.key == "c" || e.key == "C":
            clearDisplay();
            break;
        case e.key == "Backspace":
            let currentSet = document.getElementById('display').value;
            document.getElementById('display').value = currentSet.substring(0, currentSet.length-1);
    }
})

